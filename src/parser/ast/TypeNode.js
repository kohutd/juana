import ASTNode from "./ASTNode.js";

class TypeNode extends ASTNode {
    /**
     * @param {ParserContext} parserContext
     * @param {string} name
     * @param {ParameterNode[]} parameters
     */
    constructor(parserContext, { name, parameters, doc }) {
        super(parserContext);

        this.name = name;
        this.parameters = parameters;
        this.doc = doc;
    }
}

export default TypeNode;
