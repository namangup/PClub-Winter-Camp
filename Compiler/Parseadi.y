%{
#include <iostream>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
    using namespace std;
    
    int yylex(void);
    void yyerror(char *s);
    %}

%union {
    int valint;
    float valflo;
    char *str;
    char opp;
}

%type <val> program stms stm assignment declaration type additive_expression multiplicative_expression cont
%token <str> IDENTIFIER INT FLOAT
%token <valint> INTEGER
%token <valflo> FLOATING
%left <opp> ADD_OPP MULT_OPP
%start program

%%

type
: INT
| FLOAT

cont
: INTEGER
| FLOATING

multiplicative_expression
: multiplicative_expression MULT_OPP cont
| multiplicative_expression MULT_OPP IDENTIFIER
| cont
| IDENTIFIER

additive_expression
: additive_expression ADD_OPP multiplicative_expression
| multiplicative_expression

assignment
: IDENTIFIER '=' additive_expression

declaration
: type IDENTIFIER
| type assignment

stm
: assignment
| declaration

stms
: stms ';' stm
| stm

program
: stms ';'

%%

extern FILE *yyin;
int main(int argc, char **argv){
    yyin = fopen(argv[1], "r");
    yyparse();
    return 0;
}

void yyerror(char *str){
    fprintf(stderr, "error: %s\n", str);
}
