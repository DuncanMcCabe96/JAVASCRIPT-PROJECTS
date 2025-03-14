$(document).ready(function (){

    //The shine loop function uses the chaining technique
    //to utilize multiple animate event methods in the same
    //function
    function shineLoop(){
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000)
        .animate({backgroundPositionX: '-800px'}, 3000);
    };

    //setInterval will repeat the shineLoop function and 0 
    //sets the delayed amount of time between each repeat
    setInterval(shineLoop, 0);

    //shrinks header size when the document is scrolled down by 50pixels
    $(document).on("scroll", function() {
        if($(document).scrollTop() >50) {
            $("h1").addClass("header-scrolled");
        } else{
            $("h1").removeClass("header-scrolled");    
        }
    });

    $("#classicCars").on({

        //triggers the images to slide down one after the other when the user's 
        //mouse enters the div area with the #classicCars ID
        mouseenter: function(){
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);

        },

        //triggers the images to slide up and hide one after the other when the user's 
        //mouse leaves the div area with the #classicCars ID
        mouseleave: function (){
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //creates a toggle on each FAQ question by checking each element's sibling
    //so they don't all display when one question is clicked
    $('div.question').on('click', function() {
        $(this).next().slideToggle('slow');
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    // Smooth scroll to top when button is clicked
    $('#scrollTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
})