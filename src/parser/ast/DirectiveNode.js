import ASTNode from "./ASTNode.js";

class DirectiveNode extends ASTNode {
    constructor(context, { name, parameters, body }) {
        super(context);

        this.name = name;
        this.parameters = parameters;
        this.body = body;
    }
}

export default DirectiveNode;
