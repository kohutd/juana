import ASTNode from "./ASTNode.js";

class DirectiveNode extends ASTNode {
    /**
     * @param {ParserContext} parserContext
     * @param {string} name
     * @param {ValueNode[]} values
     * @param {VariableNode[]|TypeNode[]|MethodNode[]|DirectiveNode[]} body
     */
    constructor(parserContext, { name, values, body }) {
        super(parserContext);

        this.name = name;
        this.values = values;
        this.body = body;
    }
}

export default DirectiveNode;
