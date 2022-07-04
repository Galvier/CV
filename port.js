$(document).ready(function(){
    $(window).scroll(function(){
        //menu scroll effect
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //page scroll

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});

// function open_link_ne(){
//     window.open('');
// };


