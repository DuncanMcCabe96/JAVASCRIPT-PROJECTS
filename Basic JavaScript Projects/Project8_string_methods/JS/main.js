function sentence(){
    var part_1 = "I am learning ";
    var part_2 = "JavaScript ";
    var part_3 = "string methods ";
    var part_4 = "and I love it!";
    var full_sentence = part_1.concat( part_2, part_3, part_4);
    document.getElementById("concat").innerHTML = full_sentence;
}

function slice_method(){
    var sentence = "I am learning JavaScript string methods.";
    var section = sentence.slice(18, 30);
    document.getElementById("slice").innerHTML = section;
}

function toUpperCase_method(){
    var sentence = "I am learning JavaScript string methods.";
    var upper_case_sentence = sentence.toUpperCase();
    document.getElementById("uppercase").innerHTML = upper_case_sentence;
}

function toString_method(){
    var number = 123;
    var number_as_string = number.toString();
    document.getElementById("numberString").innerHTML = number_as_string;
}

function toPrecision_method(){
    var number = 123.456789;
    var precise_number = number.toPrecision(5);
    document.getElementById("precision").innerHTML = precise_number;
}

function toFixed_method(){
    var number = 123.456789;
    var fixed_number = number.toFixed(2);
    document.getElementById("fixed").innerHTML = fixed_number;
}

function valueOf_method(){
    var number = new Number(123);
    var primitive_value = number.valueOf();
    document.getElementById("valueOf").innerHTML = primitive_value;
}