alert("Do you really want to leave this page?");

var user = prompt("Please enter your name");
alert(user); 


var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert("Thanks for visiting");
}
else {
    alert("Thanks for staying with us");
}