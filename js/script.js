var dd = parseInt (prompt("enter the day you were born:"));
var mm = parseInt (prompt("enter the month you were born in:"));
var yy = parseInt (prompt("Enter the year you were born in:"));
var cc = parseInt (prompt("enter the century:"));
var gender = prompt("enter your Gender");
var formular=(((cc/4 -2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7);
var day=Math.floor(formular);
console.log("formular");
console.log("gender");
if(day===0&&gender==='male'){
    console.log("your day name is Kwasi");
}
else if(day===1&&gender==='male'){
        console.log("your day name is Kwasi");
    }
)

