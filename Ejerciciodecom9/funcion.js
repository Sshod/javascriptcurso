



$("#text1").hover(function () {
    $("#text2").show();
        
    }, function () {
        $("#text2").hide();
    }
);


$(document).ready(function () {
    var small={width: "800px",height: "600px"};
   
    $("#caja2").css(small).click (function () { 
        $(img).animate({ width: "100%", height: "100%" });
    })
    $("#caja2").mouseleave(function() {
        $(img).animate({ width: "50%", height: "50%" });
    })
}); 


$( "#caja3" ).on( "dblclick", function() {
    $("#caja3").css({
        fontSize: "100px"
    })
  } ); 

