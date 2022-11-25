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
jd.handlers // list of directive handlers

jd.getVariable(name) // get variable by name
jd.getType(name) // get type by name
jd.getMethod(name) // get method by name
jd.getHandler(name) // get directive handler by name

jd.putVariable(type) // put variable to context
jd.putType(type) // put type to context
jd.putMethod(method) // put method to context
jd.putHandler(handler) // put directive handler to context
```

## Syntax

```juana
// value can be
// - "a string" (string)
// - 123 (number)
// - -3.14 (negative number)
// - typeName (type reference)
// - variableName (variable reference)

// variable
variableName = value;
variable2Name = value;

// type
typeName {
    parameterName: typeName;
    parameter2Name: typeName;
};

// type alias
typeName typeName;

// method
methodName(parameterName: typeName, parameter2Name: typeName): typeName;

// directive
@directiveName value {
    variableName = value;
    variable2Name = value;
}
```
