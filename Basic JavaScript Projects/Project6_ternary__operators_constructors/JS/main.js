function Vote_Function(){//new function
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color){//new function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");//creates new var
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");//creates new var
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");//creates new var
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function myFunction1(){//new function
document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
}

function Person(Name, Age, Height, Weight){//new function
    this.Person_Name = Name;
    this.Person_Age = Age;
    this.Person_Height = Height;
    this.Person_Weight = Weight;
}
var myDad = new Person("Kevin", 74, "5'8", "210lbs");//creates new var
var myMe = new Person("Duncan", 28, "6'", "205lbs");//creates new var
function personInfo(){
document.getElementById("Demographic").innerHTML = "My dad is " + myDad.Person_Age + " years old, " + myDad.Person_Height + " tall, and weighs " + myDad.Person_Weight + ". I am " + myMe.Person_Age + " years old, " + myMe.Person_Height + " tall, and weigh " + myMe.Person_Weight;
}

function countFunction(){//new function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_one(){//Nested Function
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }
}