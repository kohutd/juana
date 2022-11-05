import JuanaVisitor from "./antlr4/JuanaVisitor.js";
import ParameterNode from "./ast/ParameterNode.js";
import DataNode from "./ast/DataNode.js";
import { manyNodes, singleNode } from "../utils/visit.js";
import MethodNode from "./ast/MethodNode.js";
import VariableNode from "./ast/VariableNode.js";
import StringNode from "./ast/StringNode.js";
import NumberNode from "./ast/NumberNode.js";
import IdNode from "./ast/IdNode.js";
import DirectiveNode from "./ast/DirectiveNode.js";

function _(ctx) {
    return {
        start: {
            line: ctx.start.line,
            column: ctx.start.column,
        },
        stop: {
            line: ctx.stop.line,
            column: ctx.stop.column,
        },
    };
}

class JuanaVisitorImpl extends JuanaVisitor {
    visit(ctx) {
        const visited = super.visit(ctx);

        if (Array.isArray(visited)) {
            return manyNodes(visited);
        }

        return visited;
    }

    visitId(ctx) {
        const value = ctx.getText();

        return new IdNode(_(ctx), { value });
    }

    visitParameter(ctx) {
        const name = this.visit(ctx.name);
        const optional = !!ctx.optional;
        const type = this.visit(ctx.type);
        const deprecated = !!ctx.deprecated;

        return new ParameterNode(_(ctx), { name, optional, type, deprecated });
    }

    visitData(ctx) {
        const name = this.visit(ctx.name);
        const parameters = ctx.parameters ? this.visit(ctx.parameters) : [];
        const deprecated = !!ctx.deprecated;

        return new DataNode(_(ctx), { name, parameters, deprecated });
    }

    visitMethod(ctx) {
        const name = this.visit(ctx.name);
        const parameters = ctx.parameters ? this.visit(ctx.parameters) : [];
        const result = ctx.result ? this.visit(ctx.result) : null;
        const deprecated = !!ctx.deprecated;

        return new MethodNode(_(ctx), { name, parameters, result, deprecated });
    }

    visitVariable(ctx) {
        const name = this.visit(ctx.name);
        const value = this.visit(ctx.value);

        return new VariableNode(_(ctx), { name, value });
    }

    visitVariable_value(ctx) {
        const value = super.visitVariable_value(ctx);

        return singleNode(value);
    }

    visitString(ctx) {
        let value = ctx.getText();

        value = value.substring(1, value.length - 1);

        return new StringNode(_(ctx), { value });
    }

    visitNumber(ctx) {
        const value = parseFloat(ctx.getText());

        return new NumberNode(_(ctx), { value });
    }

    visitDirective(ctx) {
        const name = this.visit(ctx.name);
        const parameters = ctx.parameters ? this.visit(ctx.parameters) : [];
        const body = ctx.body ? this.visit(ctx.body) : [];

        return new DirectiveNode(_(ctx), { name, parameters, body });
    }
}

export default JuanaVisitorImpl;
