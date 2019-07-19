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
        console.log("your day name is Kwadwo");
    }
    else if(day===2&&gender==='male'){
        console.log("your day name is Kwabena");
    }
    else if(day===3&&gender==='male'){
        console.log("your day name is kwaku");
    }
    else if(day===4&&gender==='male'){
        console.log("your day name is yaw");
    }
    else if(day===5&&gender==='male'){
        console.log("your day name is Kofi");
    }
    else if(day===6&&gender==='male'){
        console.log("your day name is Kwame");
    }
    else if(day===0&&gender==='female'){
        console.log("your day name is Akosua");
    }
    else if(day===1&&gender==='female'){
        console.log("your day name is Adwoa");
        
    }
    else if(day===2&&gender==='female'){
        console.log("your day name is Abenaa");
    }
    else if(day===3&&gender==='female'){
        console.log("your day name is akua");
    }
    else if(day===4&&gender==='female'){
        console.log("your day name is Yaa");
    }
    else if(day===5&&gender==='female'){
        console.log("your day name is Afua");
    }
    else if(day===6&&gender==='female'){
        console.log("your day name is Ama");
    }
    


