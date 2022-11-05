grammar Juana;

fragment ANY
    : .
    ;

fragment ID_START
    : 'a'..'z' | 'A'..'Z'
    | '_'
    ;

fragment ID_CONTINUE
    : ID_START
    | '0'..'9'
    | '.'
    ;

fragment NUMBER_START
    : '0'..'9'
    ;

fragment NUMBER_CONTINUE
    : NUMBER_START
    ;

SPACES: (' ' | '\n' | '\r') -> skip;

ID: ID_START (ID_CONTINUE)*;
STRING: '"' ANY*? '"';
NUMBER: '-'? NUMBER_START (NUMBER_CONTINUE)*;

document: (variable | directive | data | method)* EOF;

id: ID;
string: STRING;
number: NUMBER;

variable: name=id '=' value=variable_value ';';
variable_value: string | number;

parameter: (deprecated='deprecated')? name=id (optional='?')? ':' type=parameter_type;
parameter_type: id ('|' id)*;

data: (deprecated='deprecated')? name=id '{' parameters=data_parameters? '}';
data_parameters: (parameter ';')+;

method: (deprecated='deprecated')? name=id '(' parameters=method_parameters? ')' (':' result=parameter_type)? ';';
method_parameters: parameter (',' parameter)*;

directive: '@' name=id parameters=directive_parameters? ('{' body=directive_body? '}' | ';');
directive_parameters: (id | string | number)+;
directive_body: variable+;
