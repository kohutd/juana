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

const juanaDocument = juana`
name = "Math API";
version = "1.0.0";

@over http "https://math.juana.dev/v1/call";

add(a: float, b: float): float;
sub(a: float, b: float): float;
mul(a: float, b: float): float;
div(a: float, b: float): float;
`;

console.log(juanaDocument);
```

By url:

```javascript
import juana from 'juana';

const juanaDocument = await juana.byUrl('https://math.juana.dev/v1');

console.log(juanaDocument);
```

## API

```javascript
rpc.variables // list of top level variables (name, version etc.)
rpc.types // list of types
rpc.methods // list of methods
rpc.directives // list of directives

rpc.find(name) // find method or type by name
rpc.findType(name) // find type by name
rpc.findMethod(name) // find method by name
rpc.findDirective(name) // find directives by name

rpc.addType(type) // add type to context
rpc.addMethod(method) // add method to context
rpc.addDirective(directive) // add directive to context
```
