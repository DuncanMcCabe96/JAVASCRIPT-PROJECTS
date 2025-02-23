function Call_Loop() {
    var text = "";
    var i = 0;
    while (i < 10) {
        text += "" + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

function String_Length() {
    var str = "Hello World!";
    var length = str.length;
    document.getElementById("StringLength").innerHTML = "The string length is " + length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + Dog_Picture[2] + ".";
}

// Create an object using the const keyword
const car = {
    make: "Ford",
    model: "F150",
    year: 2021,
    color: "blue",
    type: "pickup truck"
};

// Create a function to display a string using the object properties
function constant_function() {
    document.getElementById("Constant").innerHTML = "The car is a " + car.year + " " + car.make + " " + car.model + " " + car.type + " in " + car.color + " color.";
}

// Display the value of X using document.write()
var X = 82;
document.getElementById("VarX").innerHTML = X;
{
    let X = 33;
    document.getElementById("VarX").innerHTML += "<br>" + X;
}
document.getElementById("VarX").innerHTML += "<br>" + X;

function name_Function(name) {
    return "Hello " + name;
}

function display_name() {
    document.getElementById("Name").innerHTML = name_Function("John");
}

let game = {
    title: "The Legend of Zelda",
    year: 1986,
    console: "NES",
    developer: "Nintendo",
    description: function() {
        return "The game " + this.title + " was released in " + this.year + " for the " + this.console + " console by " + this.developer + ".";
    }
};
document.getElementById("Game_object").innerHTML = game.description();

// Function with a loop that includes a break statement
function loop_with_break() {
    var text = "";
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        text += "Number: " + i + "<br>";
    }
    document.getElementById("Loop_with_Break").innerHTML = text;
}

// Function with a loop that includes a continue statement
function loop_with_continue() {
    var text = "";
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        text += "Number: " + i + "<br>";
    }
    document.getElementById("Loop_with_Continue").innerHTML = text;
}