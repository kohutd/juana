import { parse } from "./parser/index.js";
import TypeNode from "./parser/ast/TypeNode.js";
import MethodNode from "./parser/ast/MethodNode.js";
import DirectiveNode from "./parser/ast/DirectiveNode.js";
import VariableNode from "./parser/ast/VariableNode.js";
import { resolveDirective, resolveMethod, resolveType, resolveVariable } from "./context.js";
import { float, float32, float64, int, int32, int64, string } from "./std.js";

function juana(code) {
    const ast = parse(code);

    const variables = {};
    const types = [
        float32,
        float64,
        float,
        int32,
        int64,
        int,
        string,
    ];
    const methods = [];
    const directives = [];

    const context = {
        variables,
        types,
        methods,
        directives,

        find,
        findType,
        findMethod,
        findDirectives,

        addType,
        addMethod,
        addDirective,

        ast,
    };

    for (const node of ast) {
        if (node instanceof TypeNode) {
            resolveType(context, node);
        } else if (node instanceof MethodNode) {
            resolveMethod(context, node);
        } else if (node instanceof DirectiveNode) {
            resolveDirective(context, node);
        } else if (node instanceof VariableNode) {
            resolveVariable(context, variables, node);
        }
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

    function findDirectives(name) {
        return directives.filter((d) => d.name === name);
    }

    function addMethod(method) {
        methods.push(method);
    }

    function addType(type) {
        types.push(type);
    }

    function addDirective(directive) {
        directives.push(directive);
    }

    delete context.ast;

    return context;
}

juana.byUrl = (url) => fetch(url)
    .then((r) => r.text())
    .then((code) => juana(code));

export default juana;
