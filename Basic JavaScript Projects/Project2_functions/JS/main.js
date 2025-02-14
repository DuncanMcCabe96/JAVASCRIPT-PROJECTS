var A = "I like movies";//Adds a variable
window.alert(A);//Causes an Alert to pop up
var B = "I\'m cool" + " as a cucumber"// Concatenates 2 variables
document.write(B)//Calls for B to be written
var Sport = "Hockey", TeamA = " Avalanche ", TeamB = "Hurricanes", TeamC = "Lightning";
document.write(TeamA);
document.write(3 + 3);//Performs a mathenmatical function

function myFunction() {//Creates a function
    var sentence =  "I like ";
    sentence += "Hockey";
    document.getElementById("Concatenate").innerHTML = sentence;//Adjust the HTML code
}

function add(p1, p2){
    return p1*p2;
}