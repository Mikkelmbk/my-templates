let day = 6;
switch(day){

    case 1: // cases are compared using the strict comparison === so datatype has to also match.
        console.log("Monday");
        break;

    case 2: 
        console.log("Tuesday");
        break;

    case 3: 
        console.log("Wednesday");
        break;

    case 4: 
        console.log("Thursday");
        break;

    case 5: 
        console.log("Friday");
        break;

    case 6: 
        console.log("Saturday");
        break;

    case 7:
    case 8: // multiple cases in a row like this allows for multiple conditions, It's like the "or" operator in a regular If statement.
    case 9:
        console.log("Sunday");
        break;

    default: 
        console.log("the Day variable did not match any of the cases");

}