import { scrollToId } from "/funcoes/scrollpage.js";
import { getScrollByHref } from "/funcoes/scrollpage.js";

const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToId);

})

