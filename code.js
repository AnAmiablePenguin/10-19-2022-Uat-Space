function startButtonClick(){
     document.getElementById("btnStart").disabled=true
     document.getElementById("btnStop").disabled=false
}
function stopButtonClick(){
     document.getElementById("btnStart").disabled=false
     document.getElementById("btnStop").disabled=true
}

function getUserInput(){
do{
     firstName = prompt("First Name: ");
     lastName = prompt ("Last Name: ");

     fullName = firstName + " " +lastName;

     if (fullName.length > 20){
          alert("Please enter shorter names (less than 20 characters). Length entered: ")+fullName.length 
     }
} while(fullName.length > 20);
do{
     badgeNumber = prompt("Badge Number: ");

if (badgeNumber > 999){
     alert("Please enter a badge number less than 1000. Number entered: ")+badgeNumber
}

} while(badgeNumber > 999);
}






function runTimer(x){
    currTime = 50;
    var timeout = 5000;

     for(i=0;i<11;i++){
     setTimeout(function(){
          if(currTime==0){
          x.innerHTML = currTime
          alert ("Blastoff")    
          }
          else if (currTime>25){
          x.innerHTML = "Warning Less than 1/2 way to launch, time left "+currTime
          }
          else {
          x.innerHTML = currTime    
          }

          currTime = currTime - 5;
          },   timeout);
          timeout = timeout + 1000;

     }

}