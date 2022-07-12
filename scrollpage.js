const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToId);

})

function scrollToId(event){
    event.preventDefault();
    const to = getScrollByHref(event.target)
}

function getScrollByHref (element){
    const id = element.getAttribute('href');
    const top = document.querySelector(id);
    // const off = top.offsetTop
    console.log(id);
    console.log(top);
}