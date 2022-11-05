import TypeNode from "./parser/ast/TypeNode.js";
import { ArrayType, Directive, Method, Parameter, Type } from "./parts.js";

export function resolveIds(context, node) {
    const resolve = (idNode) => {
        let typeName = idNode.value;
        let isArray = false;

        if (typeName.endsWith('[]')) {
            typeName = typeName.substring(0, typeName.length - 2);
            isArray = true;
        }

        let type = context.findType(typeName);

        if (!type) {
            const typeNode = context.ast.find((node) => node instanceof TypeNode && node.name.value === typeName);
            if (!typeNode) {
                throw new Error('Undefined type: ' + typeName);
            }

            type = resolveType(context, typeNode);
        }

        if (isArray) {
            type = new ArrayType(type);
        }

        return type;
    }

    return node.map(resolve);
}

export function resolveParameters(context, nodes) {
    return nodes.map((node) => {
        const name = node.name.value;
        const type = resolveIds(context, node.types);
        const optional = node.optional;
        const deprecated = node.deprecated;

        return new Parameter(
            name,
            type,
            optional,
            { deprecated }
        );
    });
}

export function resolveMethod(context, node) {
    const name = node.name.value;

    const foundMethod = context.findMethod(name);
    if (foundMethod) {
        return foundMethod;
    }

    const parameters = resolveParameters(context, node.parameters);
    const result = resolveIds(context, node.result);
    const deprecated = node.deprecated;

    const method = new Method(
        name,
        parameters,
        result,
        { deprecated }
    );

    context.addMethod(method);

    return method;
}

export function resolveType(context, node) {
    const name = node.name.value;

    const foundType = context.findType(name);
    if (foundType) {
        return foundType;
    }

    const deprecated = node.deprecated;

    const type = new Type(
        name,
        [],
        { deprecated }
    );

    context.addType(type);

    type.parameters = resolveParameters(context, node.parameters);

    return type;
}

export function resolveDirective(context, node) {
    const name = node.name.value;
    const parameters = node.parameters.map((parameterNode) => parameterNode.value);
    const variables = {};
    node.body.forEach((variableNode) => resolveVariable(context, variables, variableNode));

    const directive = new Directive(
        name,
        parameters,
        variables
    );

    context.addDirective(directive);

    return directive;
}

export function resolveVariable(context, variables, node) {
    const name = node.name.value;
    const value = node.value.value;

    variables[name] = value;
}
