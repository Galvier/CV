import { scrollToId } from "./funções/scrollpage";
import { getScrollByHref } from "./funções/scrollpage";

const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToId);

})

