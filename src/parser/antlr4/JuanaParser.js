// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JuanaListener from './JuanaListener.js';
import JuanaVisitor from './JuanaVisitor.js';

const serializedATN = [4,1,18,152,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,5,0,36,8,0,10,0,12,0,39,9,0,
1,0,1,0,1,1,1,1,1,1,1,1,3,1,47,8,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,3,
5,58,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,3,7,67,8,7,1,7,1,7,1,7,1,8,1,8,1,8,
5,8,75,8,8,10,8,12,8,78,9,8,1,9,1,9,1,9,1,9,3,9,84,8,9,1,10,3,10,87,8,10,
1,10,1,10,1,10,3,10,92,8,10,1,10,1,10,1,11,1,11,1,11,4,11,99,8,11,11,11,
12,11,100,1,12,3,12,104,8,12,1,12,1,12,1,12,3,12,109,8,12,1,12,1,12,1,12,
3,12,114,8,12,1,12,1,12,1,13,1,13,1,13,5,13,121,8,13,10,13,12,13,124,9,13,
1,14,3,14,127,8,14,1,14,1,14,1,14,3,14,132,8,14,1,14,1,14,3,14,136,8,14,
1,14,1,14,3,14,140,8,14,1,15,4,15,143,8,15,11,15,12,15,144,1,16,4,16,148,
8,16,11,16,12,16,149,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,0,0,156,0,37,1,0,0,0,2,46,1,0,0,0,4,48,1,0,0,0,6,50,1,0,0,0,8,52,1,
0,0,0,10,57,1,0,0,0,12,59,1,0,0,0,14,64,1,0,0,0,16,71,1,0,0,0,18,83,1,0,
0,0,20,86,1,0,0,0,22,98,1,0,0,0,24,103,1,0,0,0,26,117,1,0,0,0,28,126,1,0,
0,0,30,142,1,0,0,0,32,147,1,0,0,0,34,36,3,2,1,0,35,34,1,0,0,0,36,39,1,0,
0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,1,0,0,0,40,41,5,0,0,
1,41,1,1,0,0,0,42,47,3,12,6,0,43,47,3,28,14,0,44,47,3,20,10,0,45,47,3,24,
12,0,46,42,1,0,0,0,46,43,1,0,0,0,46,44,1,0,0,0,46,45,1,0,0,0,47,3,1,0,0,
0,48,49,5,16,0,0,49,5,1,0,0,0,50,51,5,17,0,0,51,7,1,0,0,0,52,53,5,18,0,0,
53,9,1,0,0,0,54,58,3,4,2,0,55,58,3,6,3,0,56,58,3,8,4,0,57,54,1,0,0,0,57,
55,1,0,0,0,57,56,1,0,0,0,58,11,1,0,0,0,59,60,3,4,2,0,60,61,5,1,0,0,61,62,
3,10,5,0,62,63,5,2,0,0,63,13,1,0,0,0,64,66,3,4,2,0,65,67,5,3,0,0,66,65,1,
0,0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,69,5,4,0,0,69,70,3,16,8,0,70,15,1,0,
0,0,71,76,3,18,9,0,72,73,5,5,0,0,73,75,3,18,9,0,74,72,1,0,0,0,75,78,1,0,
0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,17,1,0,0,0,78,76,1,0,0,0,79,84,3,4,2,
0,80,81,3,4,2,0,81,82,5,6,0,0,82,84,1,0,0,0,83,79,1,0,0,0,83,80,1,0,0,0,
84,19,1,0,0,0,85,87,5,15,0,0,86,85,1,0,0,0,86,87,1,0,0,0,87,88,1,0,0,0,88,
89,3,4,2,0,89,91,5,7,0,0,90,92,3,22,11,0,91,90,1,0,0,0,91,92,1,0,0,0,92,
93,1,0,0,0,93,94,5,8,0,0,94,21,1,0,0,0,95,96,3,14,7,0,96,97,5,2,0,0,97,99,
1,0,0,0,98,95,1,0,0,0,99,100,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,
23,1,0,0,0,102,104,5,15,0,0,103,102,1,0,0,0,103,104,1,0,0,0,104,105,1,0,
0,0,105,106,3,4,2,0,106,108,5,9,0,0,107,109,3,26,13,0,108,107,1,0,0,0,108,
109,1,0,0,0,109,110,1,0,0,0,110,113,5,10,0,0,111,112,5,4,0,0,112,114,3,16,
8,0,113,111,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,0,115,116,5,2,0,0,116,
25,1,0,0,0,117,122,3,14,7,0,118,119,5,11,0,0,119,121,3,14,7,0,120,118,1,
0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,27,1,0,0,0,124,
122,1,0,0,0,125,127,5,15,0,0,126,125,1,0,0,0,126,127,1,0,0,0,127,128,1,0,
0,0,128,129,5,12,0,0,129,131,3,4,2,0,130,132,3,30,15,0,131,130,1,0,0,0,131,
132,1,0,0,0,132,139,1,0,0,0,133,135,5,7,0,0,134,136,3,32,16,0,135,134,1,
0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,140,5,8,0,0,138,140,5,2,0,0,139,
133,1,0,0,0,139,138,1,0,0,0,140,29,1,0,0,0,141,143,3,10,5,0,142,141,1,0,
0,0,143,144,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,31,1,0,0,0,146,148,
3,2,1,0,147,146,1,0,0,0,148,149,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,
150,33,1,0,0,0,19,37,46,57,66,76,83,86,91,100,103,108,113,122,126,131,135,
139,144,149];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JuanaParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'='", "';'", "'?'", "':'", "'|'", "'[]'", 
                            "'{'", "'}'", "'('", "')'", "','", "'@'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "SPACES", "LINE_COMMENT", 
                             "COMMENT", "ID", "STRING", "NUMBER" ];
    static ruleNames = [ "document", "element", "id", "string", "number", 
                         "value", "variable", "parameter", "parameter_types", 
                         "parameter_type", "type", "type_parameters", "method", 
                         "method_parameters", "directive", "directive_values", 
                         "directive_body" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JuanaParser.ruleNames;
        this.literalNames = JuanaParser.literalNames;
        this.symbolicNames = JuanaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JuanaParser.RULE_document);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 102400) !== 0)) {
	            this.state = 34;
	            this.element();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this.match(JuanaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JuanaParser.RULE_element);
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.directive();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.type();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 45;
	            this.method();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JuanaParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(JuanaParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JuanaParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(JuanaParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JuanaParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(JuanaParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JuanaParser.RULE_value);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.id();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.string();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.number();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JuanaParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        localctx.v_name = this.id();
	        this.state = 60;
	        this.match(JuanaParser.T__0);
	        this.state = 61;
	        localctx.v_value = this.value();
	        this.state = 62;
	        this.match(JuanaParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JuanaParser.RULE_parameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        localctx.p_name = this.id();
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 65;
	            localctx.p_optional = this.match(JuanaParser.T__2);
	        }

	        this.state = 68;
	        this.match(JuanaParser.T__3);
	        this.state = 69;
	        localctx.p_types = this.parameter_types();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter_types() {
	    let localctx = new Parameter_typesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JuanaParser.RULE_parameter_types);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.parameter_type();
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 72;
	            this.match(JuanaParser.T__4);
	            this.state = 73;
	            this.parameter_type();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter_type() {
	    let localctx = new Parameter_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JuanaParser.RULE_parameter_type);
	    try {
	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80;
	            localctx.pt_array = this.id();
	            this.state = 81;
	            this.match(JuanaParser.T__5);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JuanaParser.RULE_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 85;
	            this.match(JuanaParser.COMMENT);
	        }

	        this.state = 88;
	        localctx.t_name = this.id();
	        this.state = 89;
	        this.match(JuanaParser.T__6);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 90;
	            localctx.t_parameters = this.type_parameters();
	        }

	        this.state = 93;
	        this.match(JuanaParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type_parameters() {
	    let localctx = new Type_parametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JuanaParser.RULE_type_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 95;
	            this.parameter();
	            this.state = 96;
	            this.match(JuanaParser.T__1);
	            this.state = 100; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	method() {
	    let localctx = new MethodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JuanaParser.RULE_method);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 102;
	            this.match(JuanaParser.COMMENT);
	        }

	        this.state = 105;
	        localctx.m_name = this.id();
	        this.state = 106;
	        this.match(JuanaParser.T__8);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 107;
	            localctx.m_parameters = this.method_parameters();
	        }

	        this.state = 110;
	        this.match(JuanaParser.T__9);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 111;
	            this.match(JuanaParser.T__3);
	            this.state = 112;
	            localctx.m_result = this.parameter_types();
	        }

	        this.state = 115;
	        this.match(JuanaParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	method_parameters() {
	    let localctx = new Method_parametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JuanaParser.RULE_method_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.parameter();
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 118;
	            this.match(JuanaParser.T__10);
	            this.state = 119;
	            this.parameter();
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JuanaParser.RULE_directive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 125;
	            this.match(JuanaParser.COMMENT);
	        }

	        this.state = 128;
	        this.match(JuanaParser.T__11);
	        this.state = 129;
	        localctx.d_name = this.id();
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 458752) !== 0)) {
	            this.state = 130;
	            localctx.d_values = this.directive_values();
	        }

	        this.state = 139;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.state = 133;
	            this.match(JuanaParser.T__6);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 102400) !== 0)) {
	                this.state = 134;
	                localctx.d_body = this.directive_body();
	            }

	            this.state = 137;
	            this.match(JuanaParser.T__7);
	            break;
	        case 2:
	            this.state = 138;
	            this.match(JuanaParser.T__1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive_values() {
	    let localctx = new Directive_valuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, JuanaParser.RULE_directive_values);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 141;
	            this.value();
	            this.state = 144; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & 458752) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive_body() {
	    let localctx = new Directive_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, JuanaParser.RULE_directive_body);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 146;
	            this.element();
	            this.state = 149; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & 102400) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JuanaParser.EOF = antlr4.Token.EOF;
JuanaParser.T__0 = 1;
JuanaParser.T__1 = 2;
JuanaParser.T__2 = 3;
JuanaParser.T__3 = 4;
JuanaParser.T__4 = 5;
JuanaParser.T__5 = 6;
JuanaParser.T__6 = 7;
JuanaParser.T__7 = 8;
JuanaParser.T__8 = 9;
JuanaParser.T__9 = 10;
JuanaParser.T__10 = 11;
JuanaParser.T__11 = 12;
JuanaParser.SPACES = 13;
JuanaParser.LINE_COMMENT = 14;
JuanaParser.COMMENT = 15;
JuanaParser.ID = 16;
JuanaParser.STRING = 17;
JuanaParser.NUMBER = 18;

JuanaParser.RULE_document = 0;
JuanaParser.RULE_element = 1;
JuanaParser.RULE_id = 2;
JuanaParser.RULE_string = 3;
JuanaParser.RULE_number = 4;
JuanaParser.RULE_value = 5;
JuanaParser.RULE_variable = 6;
JuanaParser.RULE_parameter = 7;
JuanaParser.RULE_parameter_types = 8;
JuanaParser.RULE_parameter_type = 9;
JuanaParser.RULE_type = 10;
JuanaParser.RULE_type_parameters = 11;
JuanaParser.RULE_method = 12;
JuanaParser.RULE_method_parameters = 13;
JuanaParser.RULE_directive = 14;
JuanaParser.RULE_directive_values = 15;
JuanaParser.RULE_directive_body = 16;

class DocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_document;
    }

	EOF() {
	    return this.getToken(JuanaParser.EOF, 0);
	};

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitDocument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitDocument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_element;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	method() {
	    return this.getTypedRuleContext(MethodContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_id;
    }

	ID() {
	    return this.getToken(JuanaParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_string;
    }

	STRING() {
	    return this.getToken(JuanaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(JuanaParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_value;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_variable;
        this.v_name = null; // IdContext
        this.v_value = null; // ValueContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_parameter;
        this.p_name = null; // IdContext
        this.p_optional = null; // Token
        this.p_types = null; // Parameter_typesContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	parameter_types() {
	    return this.getTypedRuleContext(Parameter_typesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitParameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitParameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Parameter_typesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_parameter_types;
    }

	parameter_type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Parameter_typeContext);
	    } else {
	        return this.getTypedRuleContext(Parameter_typeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterParameter_types(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitParameter_types(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitParameter_types(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Parameter_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_parameter_type;
        this.pt_array = null; // IdContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterParameter_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitParameter_type(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitParameter_type(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_type;
        this.t_name = null; // IdContext
        this.t_parameters = null; // Type_parametersContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	COMMENT() {
	    return this.getToken(JuanaParser.COMMENT, 0);
	};

	type_parameters() {
	    return this.getTypedRuleContext(Type_parametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Type_parametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_type_parameters;
    }

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterType_parameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitType_parameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitType_parameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_method;
        this.m_name = null; // IdContext
        this.m_parameters = null; // Method_parametersContext
        this.m_result = null; // Parameter_typesContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	COMMENT() {
	    return this.getToken(JuanaParser.COMMENT, 0);
	};

	method_parameters() {
	    return this.getTypedRuleContext(Method_parametersContext,0);
	};

	parameter_types() {
	    return this.getTypedRuleContext(Parameter_typesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Method_parametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_method_parameters;
    }

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterMethod_parameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitMethod_parameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitMethod_parameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_directive;
        this.d_name = null; // IdContext
        this.d_values = null; // Directive_valuesContext
        this.d_body = null; // Directive_bodyContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	COMMENT() {
	    return this.getToken(JuanaParser.COMMENT, 0);
	};

	directive_values() {
	    return this.getTypedRuleContext(Directive_valuesContext,0);
	};

	directive_body() {
	    return this.getTypedRuleContext(Directive_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Directive_valuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_directive_values;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterDirective_values(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitDirective_values(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitDirective_values(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Directive_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_directive_body;
    }

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterDirective_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitDirective_body(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitDirective_body(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JuanaParser.DocumentContext = DocumentContext; 
JuanaParser.ElementContext = ElementContext; 
JuanaParser.IdContext = IdContext; 
JuanaParser.StringContext = StringContext; 
JuanaParser.NumberContext = NumberContext; 
JuanaParser.ValueContext = ValueContext; 
JuanaParser.VariableContext = VariableContext; 
JuanaParser.ParameterContext = ParameterContext; 
JuanaParser.Parameter_typesContext = Parameter_typesContext; 
JuanaParser.Parameter_typeContext = Parameter_typeContext; 
JuanaParser.TypeContext = TypeContext; 
JuanaParser.Type_parametersContext = Type_parametersContext; 
JuanaParser.MethodContext = MethodContext; 
JuanaParser.Method_parametersContext = Method_parametersContext; 
JuanaParser.DirectiveContext = DirectiveContext; 
JuanaParser.Directive_valuesContext = Directive_valuesContext; 
JuanaParser.Directive_bodyContext = Directive_bodyContext; 
