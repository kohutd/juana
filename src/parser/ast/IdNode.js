import ASTNode from "./ASTNode.js";

class IdNode extends ASTNode {
    /**
     * @param context
     * @param {string} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default IdNode;
