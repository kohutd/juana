import ASTNode from "./ASTNode.js";

class TypeNode extends ASTNode {
    /**
     * @param context
     * @param {IdNode} name
     * @param {ParameterNode[]} parameters
     * @param {boolean} deprecated
     */
    constructor(context, { name, parameters, deprecated }) {
        super(context);

        this.name = name;
        this.parameters = parameters;
        this.deprecated = deprecated;
    }
}

export default TypeNode;
