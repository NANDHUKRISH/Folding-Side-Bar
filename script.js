$(document).ready(function() {
    //jquery for Expand and collapse the side Bar
    $('.menu-btn').click(function(){
        $(".side-bar").addClass('active');
        $(".menu-btn").css("visibility","hidden");
    });
    // For Close Button
    $(".close-button").click(function(){
        $(".side-bar").removeClass('active');
        $(".menu-btn").css("visibility","visible");
    });
    // Jquery For toggle sub menus
    $(".sub-btn").click(function(){
       $(this).next(".sub-menu").slideToggle(); 
       $(this).find(".dropdown").toggleClass('rotate');
    })

})