// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JuanaListener from './JuanaListener.js';
import JuanaVisitor from './JuanaVisitor.js';

const serializedATN = [4,1,17,148,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,0,5,0,37,8,0,10,0,12,0,40,9,
0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,3,5,57,8,5,
1,6,3,6,60,8,6,1,6,1,6,3,6,64,8,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,72,8,7,10,
7,12,7,75,9,7,1,8,1,8,1,8,1,8,3,8,81,8,8,1,9,3,9,84,8,9,1,9,1,9,1,9,3,9,
89,8,9,1,9,1,9,1,10,1,10,1,10,4,10,96,8,10,11,10,12,10,97,1,11,3,11,101,
8,11,1,11,1,11,1,11,3,11,106,8,11,1,11,1,11,1,11,3,11,111,8,11,1,11,1,11,
1,12,1,12,1,12,5,12,118,8,12,10,12,12,12,121,9,12,1,13,1,13,1,13,3,13,126,
8,13,1,13,1,13,3,13,130,8,13,1,13,1,13,3,13,134,8,13,1,14,1,14,1,14,4,14,
139,8,14,11,14,12,14,140,1,15,4,15,144,8,15,11,15,12,15,145,1,15,0,0,16,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,0,154,0,38,1,0,0,0,2,43,1,0,
0,0,4,45,1,0,0,0,6,47,1,0,0,0,8,49,1,0,0,0,10,56,1,0,0,0,12,59,1,0,0,0,14,
68,1,0,0,0,16,80,1,0,0,0,18,83,1,0,0,0,20,95,1,0,0,0,22,100,1,0,0,0,24,114,
1,0,0,0,26,122,1,0,0,0,28,138,1,0,0,0,30,143,1,0,0,0,32,37,3,8,4,0,33,37,
3,26,13,0,34,37,3,18,9,0,35,37,3,22,11,0,36,32,1,0,0,0,36,33,1,0,0,0,36,
34,1,0,0,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,41,
1,0,0,0,40,38,1,0,0,0,41,42,5,0,0,1,42,1,1,0,0,0,43,44,5,15,0,0,44,3,1,0,
0,0,45,46,5,16,0,0,46,5,1,0,0,0,47,48,5,17,0,0,48,7,1,0,0,0,49,50,3,2,1,
0,50,51,5,1,0,0,51,52,3,10,5,0,52,53,5,2,0,0,53,9,1,0,0,0,54,57,3,4,2,0,
55,57,3,6,3,0,56,54,1,0,0,0,56,55,1,0,0,0,57,11,1,0,0,0,58,60,5,3,0,0,59,
58,1,0,0,0,59,60,1,0,0,0,60,61,1,0,0,0,61,63,3,2,1,0,62,64,5,4,0,0,63,62,
1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,5,5,0,0,66,67,3,14,7,0,67,13,1,
0,0,0,68,73,3,16,8,0,69,70,5,6,0,0,70,72,3,16,8,0,71,69,1,0,0,0,72,75,1,
0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,15,1,0,0,0,75,73,1,0,0,0,76,81,3,2,
1,0,77,78,3,2,1,0,78,79,5,7,0,0,79,81,1,0,0,0,80,76,1,0,0,0,80,77,1,0,0,
0,81,17,1,0,0,0,82,84,5,3,0,0,83,82,1,0,0,0,83,84,1,0,0,0,84,85,1,0,0,0,
85,86,3,2,1,0,86,88,5,8,0,0,87,89,3,20,10,0,88,87,1,0,0,0,88,89,1,0,0,0,
89,90,1,0,0,0,90,91,5,9,0,0,91,19,1,0,0,0,92,93,3,12,6,0,93,94,5,2,0,0,94,
96,1,0,0,0,95,92,1,0,0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,21,
1,0,0,0,99,101,5,3,0,0,100,99,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,
103,3,2,1,0,103,105,5,10,0,0,104,106,3,24,12,0,105,104,1,0,0,0,105,106,1,
0,0,0,106,107,1,0,0,0,107,110,5,11,0,0,108,109,5,5,0,0,109,111,3,14,7,0,
110,108,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,0,112,113,5,2,0,0,113,23,1,
0,0,0,114,119,3,12,6,0,115,116,5,12,0,0,116,118,3,12,6,0,117,115,1,0,0,0,
118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,25,1,0,0,0,121,119,1,
0,0,0,122,123,5,13,0,0,123,125,3,2,1,0,124,126,3,28,14,0,125,124,1,0,0,0,
125,126,1,0,0,0,126,133,1,0,0,0,127,129,5,8,0,0,128,130,3,30,15,0,129,128,
1,0,0,0,129,130,1,0,0,0,130,131,1,0,0,0,131,134,5,9,0,0,132,134,5,2,0,0,
133,127,1,0,0,0,133,132,1,0,0,0,134,27,1,0,0,0,135,139,3,2,1,0,136,139,3,
4,2,0,137,139,3,6,3,0,138,135,1,0,0,0,138,136,1,0,0,0,138,137,1,0,0,0,139,
140,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,29,1,0,0,0,142,144,3,8,4,
0,143,142,1,0,0,0,144,145,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,31,
1,0,0,0,20,36,38,56,59,63,73,80,83,88,97,100,105,110,119,125,129,133,138,
140,145];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JuanaParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'='", "';'", "'deprecated'", "'?'", "':'", 
                            "'|'", "'[]'", "'{'", "'}'", "'('", "')'", "','", 
                            "'@'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "SPACES", 
                             "ID", "STRING", "NUMBER" ];
    static ruleNames = [ "document", "id", "string", "number", "variable", 
                         "variable_value", "parameter", "parameter_types", 
                         "parameter_type", "type", "type_parameters", "method", 
                         "method_parameters", "directive", "directive_parameters", 
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
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 40968) !== 0)) {
	            this.state = 36;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 32;
	                this.variable();
	                break;

	            case 2:
	                this.state = 33;
	                this.directive();
	                break;

	            case 3:
	                this.state = 34;
	                this.type();
	                break;

	            case 4:
	                this.state = 35;
	                this.method();
	                break;

	            }
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
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



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JuanaParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
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
	    this.enterRule(localctx, 4, JuanaParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
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
	    this.enterRule(localctx, 6, JuanaParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JuanaParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        localctx.name = this.id();
	        this.state = 50;
	        this.match(JuanaParser.T__0);
	        this.state = 51;
	        localctx.value = this.variable_value();
	        this.state = 52;
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



	variable_value() {
	    let localctx = new Variable_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JuanaParser.RULE_variable_value);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.string();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
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



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JuanaParser.RULE_parameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 58;
	            localctx.p_deprecated = this.match(JuanaParser.T__2);
	        }

	        this.state = 61;
	        localctx.p_name = this.id();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 62;
	            localctx.p_optional = this.match(JuanaParser.T__3);
	        }

	        this.state = 65;
	        this.match(JuanaParser.T__4);
	        this.state = 66;
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
	    this.enterRule(localctx, 14, JuanaParser.RULE_parameter_types);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.parameter_type();
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 69;
	            this.match(JuanaParser.T__5);
	            this.state = 70;
	            this.parameter_type();
	            this.state = 75;
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
	    this.enterRule(localctx, 16, JuanaParser.RULE_parameter_type);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            localctx.pt_array = this.id();
	            this.state = 78;
	            this.match(JuanaParser.T__6);
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
	    this.enterRule(localctx, 18, JuanaParser.RULE_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 82;
	            localctx.deprecated = this.match(JuanaParser.T__2);
	        }

	        this.state = 85;
	        localctx.name = this.id();
	        this.state = 86;
	        this.match(JuanaParser.T__7);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3 || _la===15) {
	            this.state = 87;
	            localctx.parameters = this.type_parameters();
	        }

	        this.state = 90;
	        this.match(JuanaParser.T__8);
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
	    this.enterRule(localctx, 20, JuanaParser.RULE_type_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 92;
	            this.parameter();
	            this.state = 93;
	            this.match(JuanaParser.T__1);
	            this.state = 97; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===15);
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
	    this.enterRule(localctx, 22, JuanaParser.RULE_method);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 99;
	            localctx.deprecated = this.match(JuanaParser.T__2);
	        }

	        this.state = 102;
	        localctx.name = this.id();
	        this.state = 103;
	        this.match(JuanaParser.T__9);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3 || _la===15) {
	            this.state = 104;
	            localctx.parameters = this.method_parameters();
	        }

	        this.state = 107;
	        this.match(JuanaParser.T__10);
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 108;
	            this.match(JuanaParser.T__4);
	            this.state = 109;
	            localctx.result = this.parameter_types();
	        }

	        this.state = 112;
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
	    this.enterRule(localctx, 24, JuanaParser.RULE_method_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.parameter();
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 115;
	            this.match(JuanaParser.T__11);
	            this.state = 116;
	            this.parameter();
	            this.state = 121;
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
	    this.enterRule(localctx, 26, JuanaParser.RULE_directive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(JuanaParser.T__12);
	        this.state = 123;
	        localctx.name = this.id();
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 229376) !== 0)) {
	            this.state = 124;
	            localctx.parameters = this.directive_parameters();
	        }

	        this.state = 133;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.state = 127;
	            this.match(JuanaParser.T__7);
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 128;
	                localctx.body = this.directive_body();
	            }

	            this.state = 131;
	            this.match(JuanaParser.T__8);
	            break;
	        case 2:
	            this.state = 132;
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



	directive_parameters() {
	    let localctx = new Directive_parametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JuanaParser.RULE_directive_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 138;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 15:
	                this.state = 135;
	                this.id();
	                break;
	            case 16:
	                this.state = 136;
	                this.string();
	                break;
	            case 17:
	                this.state = 137;
	                this.number();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 140; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & 229376) !== 0));
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
	    this.enterRule(localctx, 30, JuanaParser.RULE_directive_body);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 142;
	            this.variable();
	            this.state = 145; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15);
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
JuanaParser.T__12 = 13;
JuanaParser.SPACES = 14;
JuanaParser.ID = 15;
JuanaParser.STRING = 16;
JuanaParser.NUMBER = 17;

JuanaParser.RULE_document = 0;
JuanaParser.RULE_id = 1;
JuanaParser.RULE_string = 2;
JuanaParser.RULE_number = 3;
JuanaParser.RULE_variable = 4;
JuanaParser.RULE_variable_value = 5;
JuanaParser.RULE_parameter = 6;
JuanaParser.RULE_parameter_types = 7;
JuanaParser.RULE_parameter_type = 8;
JuanaParser.RULE_type = 9;
JuanaParser.RULE_type_parameters = 10;
JuanaParser.RULE_method = 11;
JuanaParser.RULE_method_parameters = 12;
JuanaParser.RULE_directive = 13;
JuanaParser.RULE_directive_parameters = 14;
JuanaParser.RULE_directive_body = 15;

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

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DirectiveContext);
	    } else {
	        return this.getTypedRuleContext(DirectiveContext,i);
	    }
	};

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	method = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MethodContext);
	    } else {
	        return this.getTypedRuleContext(MethodContext,i);
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
        this.name = null; // IdContext
        this.value = null; // Variable_valueContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	variable_value() {
	    return this.getTypedRuleContext(Variable_valueContext,0);
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



class Variable_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_variable_value;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterVariable_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitVariable_value(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitVariable_value(this);
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
        this.p_deprecated = null; // Token
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
        this.deprecated = null; // Token
        this.name = null; // IdContext
        this.parameters = null; // Type_parametersContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
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
        this.deprecated = null; // Token
        this.name = null; // IdContext
        this.parameters = null; // Method_parametersContext
        this.result = null; // Parameter_typesContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
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
        this.name = null; // IdContext
        this.parameters = null; // Directive_parametersContext
        this.body = null; // Directive_bodyContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	directive_parameters() {
	    return this.getTypedRuleContext(Directive_parametersContext,0);
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



class Directive_parametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_directive_parameters;
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterDirective_parameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitDirective_parameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitDirective_parameters(this);
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

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
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
JuanaParser.IdContext = IdContext; 
JuanaParser.StringContext = StringContext; 
JuanaParser.NumberContext = NumberContext; 
JuanaParser.VariableContext = VariableContext; 
JuanaParser.Variable_valueContext = Variable_valueContext; 
JuanaParser.ParameterContext = ParameterContext; 
JuanaParser.Parameter_typesContext = Parameter_typesContext; 
JuanaParser.Parameter_typeContext = Parameter_typeContext; 
JuanaParser.TypeContext = TypeContext; 
JuanaParser.Type_parametersContext = Type_parametersContext; 
JuanaParser.MethodContext = MethodContext; 
JuanaParser.Method_parametersContext = Method_parametersContext; 
JuanaParser.DirectiveContext = DirectiveContext; 
JuanaParser.Directive_parametersContext = Directive_parametersContext; 
JuanaParser.Directive_bodyContext = Directive_bodyContext; 
