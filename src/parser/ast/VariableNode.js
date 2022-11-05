import ASTNode from "./ASTNode.js";

class VariableNode extends ASTNode {
    constructor(context, { name, value }) {
        super(context);

        this.name = name;
        this.value = value;
    }
}

export default VariableNode;
