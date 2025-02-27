function Car_function(){
    var Car_output;
    var Car = document.getElementById("Car_input").value;
    var Car_string = " is a great car!";
    switch(Car){
        case "Corvette":
            Car_output = "Corvette" + Car_string;
        break;
        case "Mustang":
            Car_output = "Mustang" + Car_string;
        break;
        case "Challenger":
            Car_output = "Challenger" + Car_string;
        break;
        case "Camaro":
            Car_output = "Camaro" + Car_string;
        break;
        case "Charger":
            Car_output = "Charger" + Car_string;
        break;
        case "Viper":
            Car_output = "Viper" + Car_string;
        break;
        default:
            Car_output = "Please enter a car exactly as written on the above list.";
    }
    document.getElementById("Car_output").innerHTML = "The " + Car_output;
}

function Hello_World_Function(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// Function to draw a graphic within the canvas
function drawGraphic() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        // Create a linear gradient
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "white");

        // Fill the canvas with the gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw a circle
        ctx.beginPath();
        ctx.arc(100, 50, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();

        // Draw some text
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Hi", 10, 90);
    }
}

// Call the drawGraphic function when the window loads
window.onload = function() {
    drawGraphic();
};

function toggleCanvas() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.style.display === "none") {
        canvas.style.display = "block";
    } else {
        canvas.style.display = "none";
    }
}

// Call the drawGraphic function when the window loads
window.onload = function() {
    drawGraphic();
};