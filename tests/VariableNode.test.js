import { parse } from "../src/parser/index.js";
import VariableNode from "../src/parser/ast/VariableNode.js";
import NumberNode from "../src/parser/ast/NumberNode.js";
import StringNode from "../src/parser/ast/StringNode.js";
import IdNode from "../src/parser/ast/IdNode.js";

test('parse simple variable should be ok', () => {
    const code = `a = 1;`;

    const ast = parse(code);
    const node = ast[0];

    expect(node).toBeInstanceOf(VariableNode);
    expect(node.name).toBe("a");
    expect(node.value).toBeInstanceOf(NumberNode);
    expect(node.value.value).toBe(1);
});

test('parse chained variable should be ok', () => {
    const code = `a.b.c.d_x_ = "ok";`;

    const ast = parse(code);
    const node = ast[0];

    expect(node).toBeInstanceOf(VariableNode);
    expect(node.name).toBe("a.b.c.d_x_");
    expect(node.value).toBeInstanceOf(StringNode);
    expect(node.value.value).toBe("ok");
});

test('parse variable with id ref should be ok', () => {
    const code = `a = someId;`;

    const ast = parse(code);
    const node = ast[0];

    expect(node).toBeInstanceOf(VariableNode);
    expect(node.name).toBe("a");
    expect(node.value).toBeInstanceOf(IdNode);
    expect(node.value.name).toBe("someId");
});


test('parse variable should fail', () => {
    const code = `a = ;`;

    expect(() => parse(code)).toThrow();
});

test('parse variable should fail', () => {
    const code = `=1;`;

    expect(() => parse(code)).toThrow();
});

test('parse variable should fail', () => {
    const code = `="str";`;

    expect(() => parse(code)).toThrow();
});

test('parse variable should fail', () => {
    const code = `="id";`;

    expect(() => parse(code)).toThrow();
});
