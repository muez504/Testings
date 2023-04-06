/* Creating variables */

let adults = parseInt(document.getElementById("adults").value);
let children = parseInt(document.getElementById("children").value);
let price = (adults * 12) + (children * 5); 
/*console.log(price);*/

/* Reviewing if the input on aduls and children, is a negative
number, if it is, will be changed to 0 */

if (adults < 0) {

    adults = 0;

}

if (children < 0) {

    children = 0;

}

/* Crating a program to print the tickets, for the adults */

for(let i = 1; i <= adults; i++) {
    console.log("Ticket #" + i); 
}

/* Creating a function to replace the price calculation */

/*let adults = document.getElementById("adults");
let children = document.getElementById("children");*/

function calc (adults, children){

    return (adults * 12) + (children * 5);

}

let priceTicket = calc.call(this, adults, children); 
/*console.log(price);*/

/* Event handling, functional button */

window.onload = function() {

    let btn = document.getElementById("buyButton");
    btn.onclick = function() {
        let adults = document.getElementById("adults"); 
        let children = document.getElementById("children"); 
        let priceTicket = calc.call(this, adults, children);
            alert(priceTicket); 

}

}










