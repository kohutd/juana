// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JuanaListener from './JuanaListener.js';
import JuanaVisitor from './JuanaVisitor.js';

const serializedATN = [4,1,16,140,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,5,0,35,8,0,10,0,12,0,38,9,0,1,0,1,0,
1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,3,5,55,8,5,1,6,3,6,58,
8,6,1,6,1,6,3,6,62,8,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,70,8,7,10,7,12,7,73,9,
7,1,8,3,8,76,8,8,1,8,1,8,1,8,3,8,81,8,8,1,8,1,8,1,9,1,9,1,9,4,9,88,8,9,11,
9,12,9,89,1,10,3,10,93,8,10,1,10,1,10,1,10,3,10,98,8,10,1,10,1,10,1,10,3,
10,103,8,10,1,10,1,10,1,11,1,11,1,11,5,11,110,8,11,10,11,12,11,113,9,11,
1,12,1,12,1,12,3,12,118,8,12,1,12,1,12,3,12,122,8,12,1,12,1,12,3,12,126,
8,12,1,13,1,13,1,13,4,13,131,8,13,11,13,12,13,132,1,14,4,14,136,8,14,11,
14,12,14,137,1,14,0,0,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,0,146,
0,36,1,0,0,0,2,41,1,0,0,0,4,43,1,0,0,0,6,45,1,0,0,0,8,47,1,0,0,0,10,54,1,
0,0,0,12,57,1,0,0,0,14,66,1,0,0,0,16,75,1,0,0,0,18,87,1,0,0,0,20,92,1,0,
0,0,22,106,1,0,0,0,24,114,1,0,0,0,26,130,1,0,0,0,28,135,1,0,0,0,30,35,3,
8,4,0,31,35,3,24,12,0,32,35,3,16,8,0,33,35,3,20,10,0,34,30,1,0,0,0,34,31,
1,0,0,0,34,32,1,0,0,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,
0,0,0,37,39,1,0,0,0,38,36,1,0,0,0,39,40,5,0,0,1,40,1,1,0,0,0,41,42,5,14,
0,0,42,3,1,0,0,0,43,44,5,15,0,0,44,5,1,0,0,0,45,46,5,16,0,0,46,7,1,0,0,0,
47,48,3,2,1,0,48,49,5,1,0,0,49,50,3,10,5,0,50,51,5,2,0,0,51,9,1,0,0,0,52,
55,3,4,2,0,53,55,3,6,3,0,54,52,1,0,0,0,54,53,1,0,0,0,55,11,1,0,0,0,56,58,
5,3,0,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,61,3,2,1,0,60,62,5,
4,0,0,61,60,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,5,5,0,0,64,65,3,14,
7,0,65,13,1,0,0,0,66,71,3,2,1,0,67,68,5,6,0,0,68,70,3,2,1,0,69,67,1,0,0,
0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,15,1,0,0,0,73,71,1,0,0,0,
74,76,5,3,0,0,75,74,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,78,3,2,1,0,78,
80,5,7,0,0,79,81,3,18,9,0,80,79,1,0,0,0,80,81,1,0,0,0,81,82,1,0,0,0,82,83,
5,8,0,0,83,17,1,0,0,0,84,85,3,12,6,0,85,86,5,2,0,0,86,88,1,0,0,0,87,84,1,
0,0,0,88,89,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,19,1,0,0,0,91,93,5,3,
0,0,92,91,1,0,0,0,92,93,1,0,0,0,93,94,1,0,0,0,94,95,3,2,1,0,95,97,5,9,0,
0,96,98,3,22,11,0,97,96,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,102,5,10,
0,0,100,101,5,5,0,0,101,103,3,14,7,0,102,100,1,0,0,0,102,103,1,0,0,0,103,
104,1,0,0,0,104,105,5,2,0,0,105,21,1,0,0,0,106,111,3,12,6,0,107,108,5,11,
0,0,108,110,3,12,6,0,109,107,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,
112,1,0,0,0,112,23,1,0,0,0,113,111,1,0,0,0,114,115,5,12,0,0,115,117,3,2,
1,0,116,118,3,26,13,0,117,116,1,0,0,0,117,118,1,0,0,0,118,125,1,0,0,0,119,
121,5,7,0,0,120,122,3,28,14,0,121,120,1,0,0,0,121,122,1,0,0,0,122,123,1,
0,0,0,123,126,5,8,0,0,124,126,5,2,0,0,125,119,1,0,0,0,125,124,1,0,0,0,126,
25,1,0,0,0,127,131,3,2,1,0,128,131,3,4,2,0,129,131,3,6,3,0,130,127,1,0,0,
0,130,128,1,0,0,0,130,129,1,0,0,0,131,132,1,0,0,0,132,130,1,0,0,0,132,133,
1,0,0,0,133,27,1,0,0,0,134,136,3,8,4,0,135,134,1,0,0,0,136,137,1,0,0,0,137,
135,1,0,0,0,137,138,1,0,0,0,138,29,1,0,0,0,19,34,36,54,57,61,71,75,80,89,
92,97,102,111,117,121,125,130,132,137];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JuanaParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'='", "';'", "'deprecated'", "'?'", "':'", 
                            "'|'", "'{'", "'}'", "'('", "')'", "','", "'@'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "SPACES", "ID", 
                             "STRING", "NUMBER" ];
    static ruleNames = [ "document", "id", "string", "number", "variable", 
                         "variable_value", "parameter", "parameter_type", 
                         "data", "data_parameters", "method", "method_parameters", 
                         "directive", "directive_parameters", "directive_body" ];

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
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 20488) !== 0)) {
	            this.state = 34;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 30;
	                this.variable();
	                break;

	            case 2:
	                this.state = 31;
	                this.directive();
	                break;

	            case 3:
	                this.state = 32;
	                this.data();
	                break;

	            case 4:
	                this.state = 33;
	                this.method();
	                break;

	            }
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
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
	        this.state = 41;
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
	        this.state = 43;
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
	        this.state = 45;
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
	        this.state = 47;
	        localctx.name = this.id();
	        this.state = 48;
	        this.match(JuanaParser.T__0);
	        this.state = 49;
	        localctx.value = this.variable_value();
	        this.state = 50;
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
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.string();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
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
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 56;
	            localctx.deprecated = this.match(JuanaParser.T__2);
	        }

	        this.state = 59;
	        localctx.name = this.id();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 60;
	            localctx.optional = this.match(JuanaParser.T__3);
	        }

	        this.state = 63;
	        this.match(JuanaParser.T__4);
	        this.state = 64;
	        localctx.type = this.parameter_type();
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
	    this.enterRule(localctx, 14, JuanaParser.RULE_parameter_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.id();
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 67;
	            this.match(JuanaParser.T__5);
	            this.state = 68;
	            this.id();
	            this.state = 73;
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



	data() {
	    let localctx = new DataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JuanaParser.RULE_data);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 74;
	            localctx.deprecated = this.match(JuanaParser.T__2);
	        }

	        this.state = 77;
	        localctx.name = this.id();
	        this.state = 78;
	        this.match(JuanaParser.T__6);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3 || _la===14) {
	            this.state = 79;
	            localctx.parameters = this.data_parameters();
	        }

	        this.state = 82;
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



	data_parameters() {
	    let localctx = new Data_parametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JuanaParser.RULE_data_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 84;
	            this.parameter();
	            this.state = 85;
	            this.match(JuanaParser.T__1);
	            this.state = 89; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===14);
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
	    this.enterRule(localctx, 20, JuanaParser.RULE_method);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 91;
	            localctx.deprecated = this.match(JuanaParser.T__2);
	        }

	        this.state = 94;
	        localctx.name = this.id();
	        this.state = 95;
	        this.match(JuanaParser.T__8);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3 || _la===14) {
	            this.state = 96;
	            localctx.parameters = this.method_parameters();
	        }

	        this.state = 99;
	        this.match(JuanaParser.T__9);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 100;
	            this.match(JuanaParser.T__4);
	            this.state = 101;
	            localctx.result = this.parameter_type();
	        }

	        this.state = 104;
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
	    this.enterRule(localctx, 22, JuanaParser.RULE_method_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.parameter();
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 107;
	            this.match(JuanaParser.T__10);
	            this.state = 108;
	            this.parameter();
	            this.state = 113;
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
	    this.enterRule(localctx, 24, JuanaParser.RULE_directive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(JuanaParser.T__11);
	        this.state = 115;
	        localctx.name = this.id();
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 114688) !== 0)) {
	            this.state = 116;
	            localctx.parameters = this.directive_parameters();
	        }

	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.state = 119;
	            this.match(JuanaParser.T__6);
	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===14) {
	                this.state = 120;
	                localctx.body = this.directive_body();
	            }

	            this.state = 123;
	            this.match(JuanaParser.T__7);
	            break;
	        case 2:
	            this.state = 124;
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
	    this.enterRule(localctx, 26, JuanaParser.RULE_directive_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 130;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 14:
	                this.state = 127;
	                this.id();
	                break;
	            case 15:
	                this.state = 128;
	                this.string();
	                break;
	            case 16:
	                this.state = 129;
	                this.number();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 132; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & 114688) !== 0));
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
	    this.enterRule(localctx, 28, JuanaParser.RULE_directive_body);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 134;
	            this.variable();
	            this.state = 137; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
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
JuanaParser.ID = 14;
JuanaParser.STRING = 15;
JuanaParser.NUMBER = 16;

JuanaParser.RULE_document = 0;
JuanaParser.RULE_id = 1;
JuanaParser.RULE_string = 2;
JuanaParser.RULE_number = 3;
JuanaParser.RULE_variable = 4;
JuanaParser.RULE_variable_value = 5;
JuanaParser.RULE_parameter = 6;
JuanaParser.RULE_parameter_type = 7;
JuanaParser.RULE_data = 8;
JuanaParser.RULE_data_parameters = 9;
JuanaParser.RULE_method = 10;
JuanaParser.RULE_method_parameters = 11;
JuanaParser.RULE_directive = 12;
JuanaParser.RULE_directive_parameters = 13;
JuanaParser.RULE_directive_body = 14;

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

	data = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DataContext);
	    } else {
	        return this.getTypedRuleContext(DataContext,i);
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
        this.deprecated = null; // Token
        this.name = null; // IdContext
        this.optional = null; // Token
        this.type = null; // Parameter_typeContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	parameter_type() {
	    return this.getTypedRuleContext(Parameter_typeContext,0);
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



class DataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_data;
        this.deprecated = null; // Token
        this.name = null; // IdContext
        this.parameters = null; // Data_parametersContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	data_parameters() {
	    return this.getTypedRuleContext(Data_parametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.enterData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitData(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitData(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Data_parametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JuanaParser.RULE_data_parameters;
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
	        listener.enterData_parameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JuanaListener ) {
	        listener.exitData_parameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JuanaVisitor ) {
	        return visitor.visitData_parameters(this);
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
        this.result = null; // Parameter_typeContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	method_parameters() {
	    return this.getTypedRuleContext(Method_parametersContext,0);
	};

	parameter_type() {
	    return this.getTypedRuleContext(Parameter_typeContext,0);
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
JuanaParser.Parameter_typeContext = Parameter_typeContext; 
JuanaParser.DataContext = DataContext; 
JuanaParser.Data_parametersContext = Data_parametersContext; 
JuanaParser.MethodContext = MethodContext; 
JuanaParser.Method_parametersContext = Method_parametersContext; 
JuanaParser.DirectiveContext = DirectiveContext; 
JuanaParser.Directive_parametersContext = Directive_parametersContext; 
JuanaParser.Directive_bodyContext = Directive_bodyContext; 
