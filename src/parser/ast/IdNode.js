import ASTNode from "./ASTNode.js";

class IdNode extends ASTNode {
    /**
     * @param {ParserContext} parserContext
     * @param {string} name
     */
    constructor(parserContext, { name }) {
        super(parserContext);

        this.name = name;
    }
}

export default IdNode;
