import ASTNode from "./ASTNode.js";

class ParameterNode extends ASTNode {
    /**
     * @param context
     * @param {IdNode} name
     * @param {boolean} optional
     * @param {TypeNode[]} types
     * @param {boolean} deprecated
     */
    constructor(context, { name, optional, types, deprecated }) {
        super(context);

        this.name = name;
        this.optional = optional;
        this.types = types;
        this.deprecated = deprecated;
    }
}

export default ParameterNode;
