import ASTNode from "./ASTNode.js";

class VariableNode extends ASTNode {
    /**
     * @param context
     * @param {IdNode} name
     * @param {StringNode|NumberNode} value
     */
    constructor(context, { name, value }) {
        super(context);

        this.name = name;
        this.value = value;
    }
}

export default VariableNode;
