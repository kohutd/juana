import ASTNode from "./ASTNode.js";

class VariableNode extends ASTNode {
    /**
     * @param {ParserContext} parserContext
     * @param {IdNode} name
     * @param {ValueNode} value
     */
    constructor(parserContext, { name, value }) {
        super(parserContext);

        this.name = name;
        this.value = value;
    }
}

export default VariableNode;
