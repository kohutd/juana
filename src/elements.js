export class Variable {
    constructor(name, value, options = {}) {
        this.name = name;
        this.value = value;
        this.options = options;
    }
}

export class Type {
    constructor(name, parameters, options = {}) {
        this.name = name;
        this.parameters = parameters;
        this.options = options;
    }
}

export class Method {
    constructor(name, parameters, result, options = {}) {
        this.name = name;
        this.parameters = parameters;
        this.result = result;
        this.options = options;
    }
}

export class Parameter {
    constructor(name, types, optional = false, options = {}) {
        this.name = name;
        this.types = types;
        this.optional = optional;
        this.options = options;
    }
}

export class Handler {
    constructor(name) {
        this.name = name;
    }

    static make(name, handle) {
        const handler = new Handler(name);

        handler.handle = handle;

        return handler;
    }

    handle(values, context) {
    }
}
