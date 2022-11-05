import ASTNode from "./ASTNode.js";

class NumberNode extends ASTNode {
    /**
     * @param context
     * @param {number} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default NumberNode;
