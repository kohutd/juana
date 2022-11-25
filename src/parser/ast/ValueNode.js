import ASTNode from "./ASTNode.js";

class ValueNode extends ASTNode {
    /**
     * @param {ParserContext} parserContext
     * @param {StringNode|NumberNode|IdNode} value
     */
    constructor(parserContext, { value }) {
        super(parserContext);

        this.value = value;
    }
}

export default ValueNode;
