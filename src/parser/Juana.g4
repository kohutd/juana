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

document: (variable | directive | type | method)* EOF;

id: ID;
string: STRING;
number: NUMBER;

variable: name=id '=' value=variable_value ';';
variable_value: string | number;

parameter: (p_deprecated='deprecated')? p_name=id (p_optional='?')? ':' p_types=parameter_types;
parameter_types: parameter_type ('|' parameter_type)*;
parameter_type: id | pt_array=id '[]';

type: (deprecated='deprecated')? name=id '{' parameters=type_parameters? '}';
type_parameters: (parameter ';')+;

method: (deprecated='deprecated')? name=id '(' parameters=method_parameters? ')' (':' result=parameter_types)? ';';
method_parameters: parameter (',' parameter)*;

directive: '@' name=id parameters=directive_parameters? ('{' body=directive_body? '}' | ';');
directive_parameters: (id | string | number)+;
directive_body: variable+;
