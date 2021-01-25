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
    
    $("body").click(function(){
         
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


});

$(document).mousemove(function(e){
    
    $("#hover").css({left:e.pageX+25, top:e.pageY});
        
});