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
