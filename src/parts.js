export class Parameter {
    constructor(name, types, optional, options = {}) {
        this.name = name;
        this.types = types;
        this.optional = optional;
        this.options = options;
    }
}

export class Method {
    constructor(name, parameters, result, options = {}) {
        this.name = name;
        this.parameters = parameters;
        this.options = options;
        this.result = result;
    }
}

export class Type {
    constructor(name, parameters, options = {}) {
        this.name = name;
        this.parameters = parameters;
        this.options = options;
    }
}

export class ArrayType extends Type {
    constructor(type) {
        super(`${type.name}[]`, [], { native: true });

        this.itemType = type;
    }
}

export class Directive {
    constructor(name, parameters, variables) {
        this.name = name;
        this.parameters = parameters;
        this.variables = variables;
    }
}
