import ASTNode from "./ASTNode.js";

class DirectiveNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {IdNode[]} parameters
     * @param {VariableNode[]} body
     */
    constructor(context, { name, parameters, body }) {
        super(context);

        this.name = name;
        this.parameters = parameters;
        this.body = body;
    }
}

export default DirectiveNode;
