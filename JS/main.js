import { scrollToId } from "/funções/scrollpage.js";
import { getScrollByHref } from "../funções/scrollpage.js";

const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToId);

})

