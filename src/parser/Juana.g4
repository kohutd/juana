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
LINE_COMMENT: '//' ~[\r\n]* -> skip;
COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

ID: ID_START (ID_CONTINUE)*;
STRING: '"' ANY*? '"';
NUMBER: '-'? NUMBER_START (NUMBER_CONTINUE)*;

document: element* EOF;

element: variable | directive | type | method;

id: ID;
string: STRING;
number: NUMBER;

value: id | string | number;

// a = 1; a.b.c = "xyz";
variable: v_name=id '=' v_value=value ';';

// a: int; b: string | int[];
parameter: p_name=id (p_optional='?')? ':' p_types=parameter_types;
parameter_types: parameter_type ('|' parameter_type)*;
parameter_type: id | pt_array=id '[]';

// User { name: string; }
type: COMMENT? t_name=id '{' t_parameters=type_parameters? '}';
type_parameters: (parameter ';')+;

// users.create(user: User): User;
method: COMMENT? m_name=id '(' m_parameters=method_parameters? ')' (':' m_result=parameter_types)? ';';
method_parameters: parameter (',' parameter)*;

// @http "juana.dev/v1" { headers.Authorization = "Bearer XXX" }
directive: COMMENT? '@' d_name=id d_values=directive_values? ('{' d_body=directive_body? '}' | ';');
directive_values: value+;
directive_body: element+;
