console.log(' hello world');
let adults = 42;
let children = 8;


let price;
price = 10*adults + 6*children;
console.log(price);

    

let hour = 15;

let status = (hour > 18) ? "Closed" : "Open" ; 

console.log(status);


for (let i = 1; i <= 10; i++) { 
    if(i==3){ break;}//terminates the loop
    console.log(i);
  }  
//other

  let i = 0;
while(i<=10) {
    if(i==6){ continue;}//skips this number
  console.log(i);
  i++;
}
//other

let cart = ['banana', 'apples', 'milk'];
console.log(cart[0]); 

for(let x=0; x<3; x++){
  console.log(cart[x]);
}
//other


let nums = [12, 66, 43, 22];
let res = 0;

for(let x=0; x<4; x++) {
    res += nums[x];
}
console.log(res); 

//other
function login(user,password) {
  console.log("Hi, "+user," your password is "+password);
}

login("james",1557);
login("bob",4092);

//other

function add(x, y) {
  return x+y;
}

let result = add(42, 8);
console.log(result);
//other
/*
let adults =2;
if(adults < 0) {
  adults = 0;
}
for(let i=1; i<=adults; i++) {
  
console.log("Ticket #" + i);}
let children = 6;
if(children  < 0) {
  children  = 0;
}
let price = adults*12 + children*6;

function  calc(adults,children) {
    return adults+children
}*/

document.write("Hello World!");



