// project of mine

window.onload =  function()
{
    let mil = document.getElementById("mile");
    let min = document.getElementById("minute");

    min.oninput = function()
    {
       mil.value = min.value/1.5; 
    }
    mil.oninput = function()
    {
        min.value = mil.value*1.5;
    }
}

var day = 2;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    default:
        document.write("Another day");
}

for (i=1; i<=5; i++) {
    document.write(i + "<br />");
}
var i=0;
while (i<=10) {
    document.write(i + "<br />");
    i++;
}



function main() {
    var depth = parseInt(readLine(), 10);
   
    //your code goes here
    	var climb  = 0;
		var days = 0;
	while (climb < depth) {
		days++;
		climb += 7;
		
		if (climb >= depth){
			break;
			}
			
		climb -= 2;
		}
		
	console.log(days);

    
}

/*
function main() {
    var goalsTeam1 = parseInt(readLine(), 10);
    var goalsTeam2 = parseInt(readLine(), 10);
    // function call
    finalResult(goalsTeam1, goalsTeam2)
    
}

//complete the function
function finalResult(goalsTeam1,goalsTeam2) {
    if(goalsTeam1>goalsTeam2)
    {
        console.log("Team 1 won");
    }
    else if(goalsTeam1<goalsTeam2)
    {
        console.log("Team 2 won");
    }
    else if(goalsTeam1==goalsTeam2)
    console.log("Draw");
    
};*/

