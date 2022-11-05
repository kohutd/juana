export function singleNode(node) {
    if (Array.isArray(node)) {
        node = node.flat(Infinity).filter((n) => !!n);

        if (node.length === 1) {
            return node[0];
        }
    }

    return node;
}

export function manyNodes(node) {
    if (Array.isArray(node)) {
        node = node.flat(Infinity).filter((n) => !!n);

        return node;
    }

    return [node];
}
