import ASTNode from "./ASTNode.js";

class NumberNode extends ASTNode {
    /**
     * @param {ParserContext} parserContext
     * @param {number} value
     */
    constructor(parserContext, { value }) {
        super(parserContext);

        this.value = value;
    }
}

export default NumberNode;
