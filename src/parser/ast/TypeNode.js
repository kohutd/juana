import ASTNode from "./ASTNode.js";

class TypeNode extends ASTNode {
    constructor(context, { name, parameters, deprecated }) {
        super(context);

        this.name = name;
        this.parameters = parameters;
        this.deprecated = deprecated;
    }
}

export default TypeNode;
