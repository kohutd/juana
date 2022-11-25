import JuanaVisitor from "./antlr4/JuanaVisitor.js";
import ParameterNode from "./ast/ParameterNode.js";
import TypeNode from "./ast/TypeNode.js";
import { flatNodes, last } from "../utils/visit.js";
import MethodNode from "./ast/MethodNode.js";
import VariableNode from "./ast/VariableNode.js";
import StringNode from "./ast/StringNode.js";
import NumberNode from "./ast/NumberNode.js";
import DirectiveNode from "./ast/DirectiveNode.js";
import ParserContext from "./ParserContext.js";
import IdNode from "./ast/IdNode.js";
import JuanaLexer from "./antlr4/JuanaLexer.js";

function _(ctx) {
    return new ParserContext({
        start: {
            line: ctx.start.line,
            column: ctx.start.column,
        },
        stop: {
            line: ctx.stop.line,
            column: ctx.stop.column,
        },
    });
}

class JuanaVisitorImpl extends JuanaVisitor {
    /**
     * @param {antlr4.CommonTokenStream} tokens
     */
    constructor(tokens) {
        super();
        this.tokens = tokens;
    }

    visit(ctx) {
        const visited = super.visit(ctx);

        if (Array.isArray(visited)) {
            return flatNodes(visited);
        }

        return visited;
    }

    visitId(ctx) {
        const name = ctx.getText();

        return new IdNode(_(ctx), { name });
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

    visitValue(ctx) {
        const value = super.visitValue(ctx);

        return value[0];
    }

    visitVariable(ctx) {
        const id = this.visitId(ctx.v_name);
        const value = this.visit(ctx.v_value);
        const doc = this.getDocComment(ctx);

        return new VariableNode(_(ctx), { name: id.name, value, doc });
    }

    visitParameter(ctx) {
        const id = this.visitId(ctx.p_name);
        const optional = !!ctx.p_optional;
        const types = this.visit(ctx.p_types);
        const doc = this.getDocComment(ctx);

        return new ParameterNode(_(ctx), { name: id.name, optional, types, doc });
    }

    visitParameter_type(ctx) {
        if (ctx.pt_array) {
            const id = this.visitId(ctx.pt_array);

            id.name = `${id.name}[]`;

            return [id];
        }

        return super.visitParameter_type(ctx);
    }

    visitType(ctx) {
        const id = this.visitId(ctx.t_name);
        const parameters = ctx.t_parameters ? this.visit(ctx.t_parameters) : [];
        const doc = this.getDocComment(ctx);

        return new TypeNode(_(ctx), { name: id.name, parameters, doc });
    }

    visitMethod(ctx) {
        const id = this.visitId(ctx.m_name);
        const parameters = ctx.m_parameters ? this.visit(ctx.m_parameters) : [];
        const result = ctx.m_result ? this.visit(ctx.m_result) : [];
        const doc = this.getDocComment(ctx);

        return new MethodNode(_(ctx), { name: id.name, parameters, result, doc });
    }

    visitDirective(ctx) {
        const id = this.visitId(ctx.d_name);
        const values = ctx.d_values ? this.visit(ctx.d_values) : [];
        const body = ctx.d_body ? this.visit(ctx.d_body) : [];
        const doc = this.getDocComment(ctx);

        return new DirectiveNode(_(ctx), { name: id.name, values, body, doc });
    }

    getDocComment(ctx) {
        const hiddenTokens = this.tokens.getHiddenTokensToLeft(ctx.start.tokenIndex, 1) || [];
        const docTokens = hiddenTokens.filter((token) => token.type === JuanaLexer.COMMENT);
        const docToken = last(docTokens);

        return docToken ? docToken.text : '';
    }
}

export default JuanaVisitorImpl;
