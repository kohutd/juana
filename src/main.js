import { parse } from "./parser/index.js";
import TypeNode from "./parser/ast/TypeNode.js";
import MethodNode from "./parser/ast/MethodNode.js";
import DirectiveNode from "./parser/ast/DirectiveNode.js";
import VariableNode from "./parser/ast/VariableNode.js";

class Parameter {
    constructor(name, type, options = {}) {
        this.name = name;
        this.type = type;
        this.options = options;
    }
}

class Method {
    constructor(name, parameters, result, options = {}) {
        this.name = name;
        this.parameters = parameters;
        this.options = options;
        this.result = result;
    }
}

class Data {
    constructor(name, parameters, options = {}) {
        this.name = name;
        this.parameters = parameters;
        this.options = options;
    }
}

class Directive {
    constructor(name, parameters, variables) {
        this.name = name;
        this.parameters = parameters;
        this.variables = variables;
    }
}

function makeType(node) {
    return node.map((typeNode) => typeNode.value);
}

function makeParameters(nodes) {
    return nodes.map((node) => {
        const name = node.name.value;
        const type = makeType(node.type);
        const deprecated = node.deprecated;

        return new Parameter(
            name,
            type,
            { deprecated }
        );
    });
}

function makeMethod(node) {
    const name = node.name.value;
    const parameters = makeParameters(node.parameters);
    const result = makeType(node.result);
    const deprecated = node.deprecated;

    return new Method(
        name,
        parameters,
        result,
        { deprecated }
    );
}

function makeData(node) {
    const name = node.name.value;
    const parameters = makeParameters(node.parameters);
    const deprecated = node.deprecated;

    return new Data(
        name,
        parameters,
        { deprecated }
    );
}

function makeDirective(node) {
    const name = node.name.value;
    const parameters = node.parameters.map((parameterNode) => parameterNode.value);
    const variables = {};
    node.body.forEach((variableNode) => makeVariable(variables, variableNode));

    return new Directive(
        name,
        parameters,
        variables
    );
}

function makeVariable(context, node) {
    const name = node.name.value;
    const value = node.value.value;

    context[name] = value;
}

function juana(code) {
    const ast = parse(code);

    const variables = {};
    const types = [];
    const methods = [];
    const directives = [];

    for (const node of ast) {
        if (node instanceof TypeNode) {
            types.push(makeData(node));
        } else if (node instanceof MethodNode) {
            methods.push(makeMethod(node));
        } else if (node instanceof DirectiveNode) {
            directives.push(makeDirective(node));
        } else if (node instanceof VariableNode) {
            makeVariable(variables, node);
        }
    }

    function call(name, parameters = []) {
        //
    }

    function callOver(proto, name, parameters = []) {
        //
    }

    function find(name) {
        return findType(name) || findMethod(name);
    }

    function findType(name) {
        return types.find((t) => t.name === name);
    }

    function findMethod(name) {
        return methods.find((m) => m.name === name);
    }

    function findDirective(name) {
        return directives.filter((d) => d.name === name);
    }

    return {
        variables,
        types,
        methods,
        directives,

        call,
        callOver,
        find,
        findType,
        findMethod,
        findDirective,
    };
}

juana.byUrl = (url) => fetch(url)
    .then((r) => r.text())
    .then((code) => juana(code));

export default juana;
