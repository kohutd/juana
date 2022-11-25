import TypeNode from "./parser/ast/TypeNode.js";
import VariableNode from "./parser/ast/VariableNode.js";
import MethodNode from "./parser/ast/MethodNode.js";
import DirectiveNode from "./parser/ast/DirectiveNode.js";
import IdNode from "./parser/ast/IdNode.js";
import StringNode from "./parser/ast/StringNode.js";
import NumberNode from "./parser/ast/NumberNode.js";
import { Method, Parameter, Type, Variable } from "./elements.js";

export class Context {
    constructor(parent = null) {
        this.parent = parent;

        this.variables = [];
        this.types = [];
        this.methods = [];
        this.handlers = [];
    }

    get document() {
        if (this instanceof JuanaDocument) {
            return this;
        }

        return this.parent.document;
    }

    /**
     * @param {VariableNode[]|TypeNode[]|MethodNode[]|DirectiveNode[]} ast
     * @param {Context|null} parent
     */
    static fromAST(ast, parent = null) {
        const context = new this(parent);

        /**
         * @param {StringNode|NumberNode|IdNode} value
         * @returns {string|number|Type|Method|Variable}
         */
        function visitValue(value) {
            if (value instanceof StringNode) {
                value = value.value;
            } else if (value instanceof NumberNode) {
                value = value.value;
            } else if (value instanceof IdNode) {
                const foundValue = context.get(value.name);

                if (!foundValue) {
                    throw new Error('Reference to undefined value: ' + value.name)
                }

                value = foundValue;
            } else {
                throw new Error('Unexpected value: ' + value);
            }

            return value;
        }

        /**
         * @param {IdNode[]} types
         * @returns {Type[]}
         */
        function visitTypes(types) {
            return types.map((idNode) => {
                const type = context.getType(idNode.name);

                if (!type) {
                    throw new Error(`Type "${idNode.name}" not defined.`);
                }

                return type;
            });
        }

        /**
         * @param {ParameterNode[]} parameters
         */
        function visitParameters(parameters) {
            return parameters.map((parameterNode) => new Parameter(
                parameterNode.name,
                visitTypes(parameterNode.types),
                parameterNode.optional
            ));
        }

        for (const astElement of ast) {
            if (astElement instanceof VariableNode) {
                let { name, value, doc } = astElement;

                value = visitValue(value);

                const variable = new Variable(name, value, { doc });

                context.putVariable(variable);
            } else if (astElement instanceof TypeNode) {
                let { name, parameters, doc } = astElement;

                parameters = visitParameters(parameters);

                const type = new Type(name, parameters, { doc });

                context.putType(type);
            } else if (astElement instanceof MethodNode) {
                let { name, parameters, result, doc } = astElement;

                parameters = visitParameters(parameters);
                result = visitTypes(result);

                const method = new Method(name, parameters, result, { doc });

                context.putMethod(method);
            } else if (astElement instanceof DirectiveNode) {
                let { name, values, body } = astElement;

                values = values.map(visitValue);
                body = Context.fromAST(body, context);

                const handler = context.getHandler(name);

                if (!handler) {
                    throw new Error(`No handler for @${name} directive found.`);
                }

                handler.handle(values, body);
            } else {
                throw new Error('Unexpected node: ' + astElement);
            }
        }

        return context;
    }

    get(name) {
        return this.getVariable(name)
            || this.getType(name)
            || this.getMethod(name);
    }

    getVariable(name) {
        let variable = this.variables.find((variable) => variable.name === name);

        if (!variable && this.parent) {
            variable = this.parent.getVariable(name);
        }

        return variable;
    }

    getType(name) {
        let type = this.types.find((type) => type.name === name);

        if (!type && this.parent) {
            type = this.parent.getType(name);
        }

        return type;
    }

    getMethod(name) {
        let method = this.methods.find((method) => method.name === name);

        if (!method && this.parent) {
            method = this.parent.getMethod(name);
        }

        return method;
    }

    getHandler(name) {
        let handler = this.handlers.find((handler) => handler.name === name);

        if (!handler && this.parent) {
            handler = this.parent.getHandler(name);
        }

        return handler;
    }

    putVariable(variable) {
        this.removeVariable(variable.name);
        this.variables.push(variable);
    }

    putType(type) {
        this.removeType(type.name);
        this.types.push(type);
    }

    putMethod(method) {
        this.removeMethod(method.name);
        this.methods.push(method);
    }

    putHandler(handler) {
        this.removeHandler(handler.name);
        this.handlers.push(handler);
    }

    removeVariable(name) {
        this.variables = this.variables.filter((type) => type.variables !== name);
    }

    removeType(name) {
        this.types = this.types.filter((type) => type.name !== name);
    }

    removeMethod(name) {
        this.methods = this.methods.filter((method) => method.name !== name);
    }

    removeHandler(name) {
        this.handlers = this.handlers.filter((handler) => handler.name !== name);
    }
}

export class JuanaDocument extends Context {
}
