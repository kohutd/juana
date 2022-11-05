import antlr4 from "antlr4";
import JuanaLexer from "./antlr4/JuanaLexer.js";
import JuanaParser from "./antlr4/JuanaParser.js";
import { title } from "../utils/text.js";
import { manyNodes } from "../utils/visit.js";
import JuanaVisitorImpl from "./JuanaVisitorImpl.js";

class ErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        throw new Error(msg);
    }
}

export function parse(code, options = {}) {
    options.start = options.start || 'document';

    code = code.toString().trim();

    const chars = new antlr4.InputStream(code);
    const lexer = new JuanaLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JuanaParser(tokens, lexer);
    parser.removeErrorListeners();
    parser.addErrorListener(new ErrorListener());

    const tree = parser[options.start]();

    const visitor = new JuanaVisitorImpl();

    let ast = visitor[`visit${title(options.start)}`](tree);

    return manyNodes(ast);

}
