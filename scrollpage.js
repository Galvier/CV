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
    const refer = `[href*="${id}"]`;
    const top = document.querySelector(refer);
    // const off = top.offsetTop
    console.log(id);
    console.log(refer);
    console.log(top);
}