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

@http "https://math.juana.dev/v1";

float float64;

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
jd.findDirectives(name) // find directives by name

jd.addType(type) // add type to context
jd.addMethod(method) // add method to context
jd.addDirective(directive) // add directive to context
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

// directive declaration using predefined directive "directive"
@directive directiveName directiveArgumentName directiveArgument2Name {
    variableName = value;
    variable2Name = value;
}

// directive utilization
@directiveName directiveArgument directiveArgument2 {
    variableName = value;
    variable2Name = value;
}
```
