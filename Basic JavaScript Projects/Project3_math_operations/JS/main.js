function mathAddition(){//Creates an Addition function to return 5 + 5
    var addition = 5 + 5;
    document.getElementById("Math").innerHTML = " 5 + 5 = " + addition;
}

function mathSubtraction(){//Creates a subtraction function to return 5 - 3
    var subtraction = 5 - 3;
    document.getElementById("Math2").innerHTML = " 5 - 2 = " + subtraction;
}

function mathMultiplication(){//Creates a multiplication function to return 5 * 3
    var mult = 5 * 3;
    document.getElementById("Math3").innerHTML = " 5 * 2 = " + mult;
}

function mathDivision(){//Creates a division function to return 10/2
    var divi = 10 / 2;
    document.getElementById("Math4").innerHTML = " 10 / 2 = " + divi;
}

function mathAll(){//Creates a function that utilizes all math functions
    var allMath = (10 / 2) + 16 * 4 / 3.8 - 2;
    document.getElementById("Math5").innerHTML = " (10 / 2) + 16 * 4 / 3.8 - 2 = " + allMath;
}

function mathPercent(){//Creates a function to return the remainder of 9/4
    var percMath = 9 % 4;
    document.getElementById("Math6").innerHTML = " 9/4 has a remainder of " + percMath;
}

function mathNegotiate(){//Creates a function to return thge inverse of 10/5
    var x = 10/5;
    document.getElementById("Math7").innerHTML = " the inverse answer to 10/5 is " + -x;
}

var x = 5;//sets x equal to 5
x++;//incrememnts x by 1
document.write(x);//prints the var "x"

var y = 5;//sets y equal to 5
y--;//decrements y by 1
document.write(y);//prints the var "y"

window.alert(Math.random() * 100);//creates a window alert to display a random number between 0 and 100

document.write(Math.PI)//Prints the math object PI