$(document).ready(function(){
    $("#content2 img").hide();
    var toggle=false;

    $("a").click(function(e){
        e.preventDefault();
    });

    $("#content1 .button").click(function(){
        $("#target1").toggleClass("red");
    });

    $("#content2 .button").click(function(){
        $("#content2 img").slideToggle();
    });

    $("#content3 .button").click(function(){
        $("#target2").append("<p>Here's a new paragraph!");
    })

    $("#content4 .button").click(function(){
        if(!toggle){
            $("#target3").animate({
                width: "0px"
            }, 1000, function(){
                $("#target3").hide();
                toggle=true;
            });
        }
        else{
            $("#target3").show();
            $("#target3").animate({
                width: "347px"
            }, 1000, function(){
                toggle=false;
            });
        }
    });

    $("#content5 .button").click(function(){
        $("#target4").fadeToggle("slow");
    });

    $("#content6 .button").click(function(){
        var inputText = $("#target5").val();
        console.log(inputText);
        $("#target6").html(inputText);
    });
});