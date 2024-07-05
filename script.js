

/*This script displays a greeting to the user based upon the current time.
it is an example from JacaScript book*/

var today = new Date();
var hourNow= today.getHours();
var greeting;

//Display the appropriate greeting based on the current time
if (hourNow>18){
    greeting = 'Good Evening!';
} else if (hourNow >0){
    greeting = 'Good Morning JavaScript!'
}

document.write ('<h3>'+ greeting +'</h3>')
