import ASTNode from "./ASTNode.js";

class StringNode extends ASTNode {
    /**
     * @param context
     * @param {string} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default StringNode;
