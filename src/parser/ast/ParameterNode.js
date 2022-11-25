import ASTNode from "./ASTNode.js";

class ParameterNode extends ASTNode {
    /**
     * @param {ParserContext} parserContext
     * @param {string} name
     * @param {TypeNode[]} types
     * @param {boolean} optional
     */
    constructor(parserContext, { name, types, optional }) {
        super(parserContext);

        this.name = name;
        this.types = types;
        this.optional = optional;
    }
}

export default ParameterNode;
