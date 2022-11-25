import { parse } from "./parser/index.js";
import { Context, JuanaDocument } from "./context.js";
import { arrayType, binaryType, floatType, intType, nullType, stringType } from "./types.js";
import { namespaceHandler } from "./handlers.js";

const globalContext = new Context();

globalContext.putType(binaryType);
globalContext.putType(floatType);
globalContext.putType(intType);
globalContext.putType(stringType);
globalContext.putType(arrayType);
globalContext.putType(nullType);

globalContext.putHandler(namespaceHandler);

function juana(code) {
    const ast = parse(code);

    return JuanaDocument.fromAST(ast, globalContext);
}

juana.globalContext = globalContext;

juana.byUrl = (url) => fetch(url)
    .then((r) => r.text())
    .then((code) => juana(code));

export default juana;
