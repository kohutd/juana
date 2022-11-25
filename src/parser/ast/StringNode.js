import ASTNode from "./ASTNode.js";

class StringNode extends ASTNode {
    /**
     * @param {ParserContext} parserContext
     * @param {string} value
     */
    constructor(parserContext, { value }) {
        super(parserContext);

        this.value = value;
    }
}

export default StringNode;
