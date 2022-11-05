# Juana

JSON-RPC description language.

## Installation

```shell
npm i juana
```

## Usage

From source:

```javascript
import juana from 'juana';

const rpc = juana`
name = "Math API";
version = "1.0.0";

@over http "https://math.juana.dev/v1/call";

add(a: float, b: float): float;
sub(a: float, b: float): float;
mul(a: float, b: float): float;
div(a: float, b: float): float;
`;

const result = await rpc.call('add', [2, 2]);

console.log(result);
```

By url:

```javascript
import juana from 'juana';

const rpc = await juana.byUrl('https://math.juana.dev/v1');

const result = await rpc.call('add', [2, 2]);

console.log(result);
```

## API

```javascript
rpc.variables // list of top lever variables (name, version etc.)
rpc.types // list of types
rpc.methods // list of methods
rpc.directives // list of directives

rpc.call(name, parameters) // call a method using default protocol
rpc.callOver(proto, name, parameters) // call a method over specific protocol
rpc.find(name) // find method or type by name
rpc.findType(name) // find type by name
rpc.findMethod(name) // find method by name
rpc.findDirective(name) // find directives by name
```
