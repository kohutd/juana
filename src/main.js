import { parse } from "./parser/index.js";
import DataNode from "./parser/ast/DataNode.js";
import MethodNode from "./parser/ast/MethodNode.js";
import DirectiveNode from "./parser/ast/DirectiveNode.js";

function juana(code) {
    const ast = parse(code);

    const methods = {};
    const types = {};
    const over = {};

    for (const node of ast) {
        if (node instanceof MethodNode) {
            methods[node.name.value] = node;
        } else if (node instanceof DataNode) {
            types[node.name.value] = node;
        } else if (node instanceof DirectiveNode) {
            if (node.name.value === 'over') {
                over[node.name.value] = node;
            }
        }
    }

    function call(name, parameters = []) {
        //
    }

    return {
        methods,
        types,
        over,
        call,
        ast,
    };
}

juana.byUrl = (url) => fetch(url)
    .then((r) => r.text());

export default juana;
