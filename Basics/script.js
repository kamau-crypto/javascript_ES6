//
//Log Hello World to the console
//console.log("Hello World!!!");
//
/*
*VARIABLES AND DATATYPES
*
    //
    //The variable definition below is one which shows the camel case notation
    const firstName='Peter';
    console.log (firstName);
    //
    //variable naming rules
    const lastName='Kamau';
    const age=26;
    const fullAge=false;
    //
    // TEMPLATING LITERALS
    // Below is the sample output that shows that you can template defined varaibles.
    //.i.e. Templating literals support variable conversion and can therefore compute complex variables
    console.log (`My first name is ${firstName} ${lastName}. Is my age really ${age}? ${fullAge}`);
    //
    //NOTE: Failure to assign a named variable a value yields a return of "Undefined" and it means that
    // value is undefined
    //
*/
/*
*VARIABLE MUTATION AND TYPE COERSION
*
    const firstName='Peter';
    var age=26;
    //
    //TYPE COERSION
    //The output below is a perfect example of type coersion, whereby JS converts age from
    //a number to a string, so that it can be displayed alongside the string in console
    console.log(firstName+' '+age); 
    //
    //We can define mutliple variables and assign them values later on
    var job, isMarried;
    job='Machine Learning Engineer';
    isMarried= false;
    //
    console.log(firstName+' is a '+age+' year old '+job+'. Is he married? ' +isMarried);
*/
/* 
NB: All Datatype can be type coersed from one form to another, namely, they can be converted
from their primitive datatypes to a more suitable datatype 
*/
/* VARIABLE MUTATION 
    //
    //Redefined the variable values
    age='twenty eight';
    job='driver';
    //
    //Output the defined variable values
    console.log(firstName+' is a '+age+' year old '+job+'. Is he married? ' +isMarried);
    //
    //Re-defined the values to accept input values from the user
    age=prompt('What is your appropriate age?');
    job=prompt('What is your current occupation?');
    isMarried=prompt('What is your marriage status?');
    //
    //Output the values to the console
    console.log(firstName+' is a '+age+' year old '+job+'. Marriage Status ' +isMarried);
*/
/*BASIC OPERATORS
    var now, firstName, agePeter, ageMark, ageJohn;
    now=2021;
    agePeter= 25;
    ageMark= 28;
    ageJohn= 31;
    //
    // MATH OPERATORS
    //There are four basic math operators namely, addition, subtraction, multiplication,
    //and division.
    firstName='Peter';
    yearPeter= now-agePeter;
    yearJohn= now-ageJohn;
    console.log(firstName +' was born in '+yearPeter);
    console.log(`Two years from today will be ${now +2}`);
    console.log(now *2);
    console.log(now/10);
    //
    //LOGICAL OPERATORS are of two types namely < and >
    var johnOlder=ageJohn>agePeter;
    console.log(johnOlder);
    //
    //TYPE OF OPERATORS identify the datatype of the defined variable
    console.log(typeof johnOlder);
    console.log(typeof agePeter);
*/
/*OPERATOR PRECEDENCE*/
    