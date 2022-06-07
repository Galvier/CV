$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


});

function open_link_ne(){
    window.open('https://davi-souza2001.github.io/copy-of-Netflix/');
};
function open_link_gn(){
    window.open('https://davi-souza2001.github.io/game-gnat/');
};
function open_link_qz(){
    window.open('https://github.com/davi-souza2001/quizApp');
};
function open_link_in(){
    window.open('https://davi-souza2001.github.io/Copy-of-Instagram/');
};
function open_link_fp(){
    window.open('https://davi-souza2001.github.io/form-purple/');
};
function open_link_fd(){
    window.open('https://davi-souza2001.github.io/doom-game-fire/');
};
function open_link_mo(){
    window.open('https://davi-souza2001.github.io/moon-project/')
}
function open_link_te(){
    window.open('https://davi-souza2001.github.io/TecBlog/')
}
function open_link_mu(){
    window.open('https://davi-souza2001.github.io/Museum-website/')
}
function open_link_bo(){
    window.open('https://davi-souza2001.github.io/animateBox/')
}
function open_link_mon(){
    window.open('https://davi-souza2001.github.io/budgetApp/')
}
function open_link_fl(){
    window.open('https://davi-souza2001.github.io/flappy-bird/')
}
function open_link_wr(){
    window.open('https://note-pad-eight.vercel.app/')
}
function open_link_fr(){
    window.open('https://github.com/davi-souza2001/formWithReact')
}
function open_link_bn(){
    window.open('https://github.com/davi-souza2001/bot-Discord')
}
function open_link_mh(){
    window.open('https://github.com/davi-souza2001/montyHall')
}

