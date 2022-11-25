import ASTNode from "./ASTNode.js";

class DocNode extends ASTNode {
    /**
     * @param {ParserContext} parserContext
     * @param {string} content
     */
    constructor(parserContext, { content }) {
        super(parserContext);

        this.content = content;
    }
}

export default DocNode;
