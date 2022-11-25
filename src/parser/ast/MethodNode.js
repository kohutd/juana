import ASTNode from "./ASTNode.js";

class MethodNode extends ASTNode {
    /**
     * @param {ParserContext} parserContext
     * @param {string} name
     * @param {ParameterNode[]} parameters
     * @param {IdNode[]} result
     * @param {string} doc
     */
    constructor(parserContext, { name, parameters, result, doc }) {
        super(parserContext);

        this.name = name;
        this.parameters = parameters;
        this.result = result;
        this.doc = doc;
    }
}

export default MethodNode;
