var X = 10;
function Add_numbers_1 (){
    document.write(20 + X + "<br>");
}
function Add_numbers_2 (){
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3 (){
    var Y = 20;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4 (){
    var Y = 12
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5 (){
    var Z = 20;
    console.log(20 + Z + "<br>");
}
function Add_numbers_6 (){
    var Z = 12
    console.log(Z + 100);
}
Add_numbers_5();
Add_numbers_6();

function Function1(){
    if (new Date().getHours() < 18){
        document.getElementById("function").innerHTML = "How are you today?";
    }
}

console.log("script is running...");
var a = 10;
if (a > 5) {
  console.log("a is greater than 5");
} 
else {
  console.log("a is not greater than 5");
}

function Age_Function(){
    Age = document.getElementById("Age").value;
    if (Age >= 18){
        Vote = "You are old enough to vote!";
    }
    else{
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("how_old_are_you?").innerHTML = Vote;
}

function Time_Function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18){
        Reply = "It is afternoon.";
    }
    else{
        Reply = "It is evening time.";
    }
    document.getElementById("time").innerHTML = Reply;
}