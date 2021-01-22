$(document).ready(function() {
    let screens = $('.screen-container')[0].children;
    //    console.log('screen number', $('.screen-container')[0].children.length);
    
    var prevzeroopacity = screens.length;
    var fullopacity = 1;
    var halfopacity = 2;
    var nextzeroopacity = 3;
            
    function setNextOpacities() {
        $("#screen" + prevzeroopacity).css("opacity","0%");
        $("#screen" + fullopacity).css("opacity","0%");
        $("#screen" + halfopacity).css("opacity", "100%");
        $("#screen" + nextzeroopacity).css("opacity","15%");
    }
    
    function setPrevOpacities() {
        $("#screen" + prevzeroopacity).css("opacity","100%");
        $("#screen" + fullopacity).css("opacity","15%");
        $("#screen" + halfopacity).css("opacity", "0%");
        $("#screen" + nextzeroopacity).css("opacity", "0%");
    }
    
    $(".right").click(function(){
         
        setNextOpacities();

        prevzeroopacity++;
        if (prevzeroopacity > screens.length) prevzeroopacity = 1;
        
        fullopacity++;
        if (fullopacity > screens.length) fullopacity = 1;
        
        halfopacity++;
        if (halfopacity > screens.length) halfopacity = 1;
       
        nextzeroopacity++;
        if (nextzeroopacity > screens.length) nextzeroopacity = 1;

    }); 
    
    $(".left").click(function(){
        setPrevOpacities();
        
        prevzeroopacity--;
        if (prevzeroopacity < 1) prevzeroopacity = screens.length;
        
        fullopacity--;
        if (fullopacity < 1) fullopacity = screens.length;
        
        halfopacity--;
        if (halfopacity < 1) halfopacity = screens.length;
       
        nextzeroopacity--;
        if (nextzeroopacity < 1) nextzeroopacity = screens.length;
        
    }); 
    
    $(".left").hover(function(){
       $("#hover").text("PREV"); 
    });
    $(".right").hover(function(){
       $("#hover").text("NEXT"); 
    });

});

$(document).mousemove(function(e){
    
    $("#hover").css({left:e.pageX+25, top:e.pageY});
        
});