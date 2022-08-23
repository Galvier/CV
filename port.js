//funçoes anonimas
$(document).ready(function(){
    $(window).scroll(function(){
        //menu scroll effect
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //sandwich bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});

function open_link_fl(){
    window.open('imc-one-sepia.vercel.app');
};
function open_link_NFT(){
    window.open('https://nft-bootcamp-front-beta.vercel.app/');
};
function open_link_DAO(){
    window.open('https://dao-app-web3dev.vercel.app/');
};



