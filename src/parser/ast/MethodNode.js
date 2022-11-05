import ASTNode from "./ASTNode.js";

class MethodNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {ParameterNode[]} parameters
     * @param {TypeNode[]} result
     * @param {boolean} deprecated
     */
    constructor(context, { name, parameters, result, deprecated }) {
        super(context);

        this.name = name;
        this.parameters = parameters;
        this.result = result;
        this.deprecated = deprecated;
    }
}

export default MethodNode;
