function my_Dictionary(){
    var Car ={
        Make: "Toyota",
        Model: "Rav4",
        Color: "White",
        Year: "2023",
        Shift: "Automatic",
        Type: "All-Wheel",
    };
    delete Car.Color
    document.getElementById("Dictionary").innerHTML = Car.Color;
}