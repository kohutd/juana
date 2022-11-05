import ASTNode from "./ASTNode.js";

class ParameterNode extends ASTNode {
    constructor(context, { name, optional, type, deprecated }) {
        super(context);

        this.name = name;
        this.optional = optional;
        this.type = type;
        this.deprecated = deprecated;
    }
}

export default ParameterNode;
