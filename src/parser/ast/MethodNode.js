import ASTNode from "./ASTNode.js";

class MethodNode extends ASTNode {
    constructor(context, { name, parameters, result, deprecated }) {
        super(context);

        this.name = name;
        this.parameters = parameters;
        this.result = result;
        this.deprecated = deprecated;
    }
}

export default MethodNode;
