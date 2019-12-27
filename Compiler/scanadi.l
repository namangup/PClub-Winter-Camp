%{
#include <stdlib.h>
#include <stdio.h>
#include "Parseadi.tab.h"
void yyerror(char *);
%}
%%
" "

[0-9]+[.][0-9]+ {
    yylval.valflo = atof(yytext);
    return FLOATING;
}

[0-9]+ {
    yylval.valint = atoi(yytext);
    return INTEGER;
}
[-+] {
    yylval.opp = *yytext;
    return ADD_OPP;
}
[*/] {
    yylval.opp = *yytext;
    return MULT_OPP;
}
"=" {
	return *yytext;
}
";" {
	return *yytext;
}
"int" {
    yylval.str = yytext;
    return INT;
}
"float" {
    yylval.str = yytext;
    return FLOAT;
}
[a-zA-Z]+[a-zA-Z0-9_]* {
    yylval.str = yytext;
    return IDENTIFIER;
}
.   yyerror("Unknown character");
%%
int yywrap(void) {
    return 1;
}