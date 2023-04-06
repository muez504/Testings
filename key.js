 /*Brace yourself for more rules!
- The first character of a variable name must be a letter, underscore (_), or a dollar sign ($) (Subsequent characters can be letters, digits, underscores, or dollar signs).
- The first character of a variable name can’t be a number.
- Variable names can’t include a mathematical or logical operator in their name. For instance, 2*something or this+that;
- Variable names can’t contain spaces.
- You’re not allowed to use any special symbols, like my#num, num%, etc*/

document.write("vested bussiness area !  and schedule");
// new line is needed , but ?
var x = 100;
document.write(x);

alert("This is an alert box!");
// other

function main() {
    var age = parseInt(readLine(), 10)
    // Your code here
   
var adult_age=18;
console.log(age>=adult_age)
    
}
//other
var age = 42;
var isAdult = (age < 18) ? "Too young": "Old enough";
document.write(isAdult);

//other
function main() {
    var hour = parseInt(readLine(), 10);
    // Your code goes here
    var ishour = (hour <= 12 ) ? "am" : "pm"
    console.log(ishour)
}