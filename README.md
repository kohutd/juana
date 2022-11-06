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
jd.variables // list of top level variables (name, version etc.)
jd.types // list of types
jd.methods // list of methods
jd.directives // list of directives

jd.find(name) // find method or type by name
jd.findType(name) // find type by name
jd.findMethod(name) // find method by name
jd.findDirective(name) // find directives by name

jd.addType(type) // add type to context
jd.addMethod(method) // add method to context
jd.addDirective(directive) // add directive to context
```
