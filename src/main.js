import { parse } from "./parser/index.js";
import { Context, JuanaDocument } from "./context.js";
import {
    anyType,
    arrayType,
    binaryType,
    boolType,
    float128Type,
    float256Type,
    float32Type,
    float512Type,
    float64Type,
    floatType,
    int128Type,
    int256Type,
    int32Type,
    int512Type,
    int64Type,
    intType,
    nullType,
    numberType,
    objectType,
    stringType,
    ufloat128Type,
    ufloat256Type,
    ufloat32Type,
    ufloat512Type,
    ufloat64Type,
    ufloatType,
    uint128Type,
    uint256Type,
    uint32Type,
    uint512Type,
    uint64Type,
    uintType,
    unumberType
} from "./types.js";
import { namespaceHandler } from "./handlers.js";

const globalContext = new Context();

globalContext.putType(binaryType);
globalContext.putType(stringType);
globalContext.putType(arrayType);
globalContext.putType(nullType);
globalContext.putType(boolType);
globalContext.putType(anyType);
globalContext.putType(objectType);

globalContext.putType(numberType);
globalContext.putType(unumberType);

globalContext.putType(floatType);
globalContext.putType(float32Type);
globalContext.putType(float64Type);
globalContext.putType(float128Type);
globalContext.putType(float256Type);
globalContext.putType(float512Type);

globalContext.putType(ufloatType);
globalContext.putType(ufloat32Type);
globalContext.putType(ufloat64Type);
globalContext.putType(ufloat128Type);
globalContext.putType(ufloat256Type);
globalContext.putType(ufloat512Type);

globalContext.putType(intType);
globalContext.putType(int32Type);
globalContext.putType(int64Type);
globalContext.putType(int128Type);
globalContext.putType(int256Type);
globalContext.putType(int512Type);

globalContext.putType(uintType);
globalContext.putType(uint32Type);
globalContext.putType(uint64Type);
globalContext.putType(uint128Type);
globalContext.putType(uint256Type);
globalContext.putType(uint512Type);

globalContext.putHandler(namespaceHandler);

function juana(code) {
    const ast = parse(code);

    return JuanaDocument.fromAST(ast, globalContext);
}

juana.globalContext = globalContext;

juana.byUrl = (url) => fetch(url)
    .then((r) => r.text())
    .then((code) => juana(code));


export * from "./elements.js";
export * from "./types.js";
export * from "./context.js";

export default juana;
