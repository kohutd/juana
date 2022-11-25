import { Handler } from "./elements.js";

export const namespaceHandler = Handler.make('namespace', (values, context) => {
    context.types.forEach((type) => {
        type.name = `${values[0]}.${type.name}`;
        context.parent.putType(type);
    });

    context.methods.forEach((method) => {
        method.name = `${values[0]}.${method.name}`;
        context.parent.putMethod(method);
    });
});
