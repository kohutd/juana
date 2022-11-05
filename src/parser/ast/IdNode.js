import ASTNode from "./ASTNode.js";

class IdNode extends ASTNode {
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default IdNode;
