
/*var dd = parseInt (prompt("enter the day you were born:"));
var mm = parseInt (prompt("enter the month you were born in:"));
var yy = parseInt (prompt("Enter the year you were born in:"));
var cc = parseInt (prompt("enter the century:"));
*/


function one(){
var n = document.getElementById("name").value;
var input = document.getElementById("outer").value;
var two= new Date(input);
var yy=two.getFullYear();
var dd=two.getDay();
var mm=two.getMonth();
mm=mm+1;
console.log(yy);
console.log(dd);
console.log(mm);
var cc=document.getElementById("four").value;
var gender = document.getElementById("six").value;
console.log(gender);
var formular=(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
var day=Math.floor(formular);
console.log(day);
if(day== 0 && gender == 'male'){
    document.getElementById('n').innerHTML= " Kwasi";
}
else if(day==1&&gender=='male'){
        console.log(" Kwadwo");
        
    }
    else if(day==2 && gender=='male'){
        document.getElementById('n').innerHTML= "is Kwabenaa";
    }
    else if(day==3 && gender=='male'){
        document.getElementById('n').innerHTML= "Kwaku";
    }
    else if(day==4 && gender=='male'){
        document.getElementById('n').innerHTML= "yaw";
    }
    else if(day==5 && gender=='male'){
        document.getElementById('n').innerHTML= "Kofi";
    }
    else if(day==6 && gender=='male'){
        document.getElementById('n').innerHTML= "Kwame";
    }
    else if(day===0 && gender==='female'){
        document.getElementById('n').innerHTML= "Akosuo";
    }
    else if(day===1&&gender==='female'){
        document.getElementById('n').innerHTML= "Adwoa";
        
    }
    else if(day===2&&gender==='female'){
        document.getElementById('n').innerHTML= "Abenaa";
    }
    else if(day===3&&gender==='female'){
        document.getElementById('n').innerHTML= "Akua";
    }
    else if(day===4&&gender==='female'){
        document.getElementById('n').innerHTML= "Yaa";
    }
    else if(day===5&&gender==='female'){
        document.getElementById('n').innerHTML= "Afua";
    }
    else if(day===6&&gender==='female'){
        document.getElementById('n').innerHTML= "Ama";
    }else{
   
        alert("wrong input")
    }
}