$(function () {
    var imgname="";
    var flag = true;
    $("#onoff").click(function () {
        if (flag) {
            imgname = "images/off.jpg"
            flag = false;
        } else {
            imgname = "images/on.jpg"
            flag = true;
        }
$("img").attr("src", imgname);

    });
    /*show hide examples*/
    $("#btnhide").click(function(){
        $("#randomtext").hide();
        
    });
    
 $("#btnshow").click(function(){ 
        $("#randomtext").show();

});
    $("#btntoggle").click(function(){ 
        $("#randomtext").toggle();

});
    $("#fadeout").click(function(){
        $("#box").fadeOut();
    });
    $("#fadein").click(function(){
        $("#box").fadeIn();
    });
    $("#fadetoggle").click(function(){
        $("#box").fadeToggle();
    });
    
    
});
