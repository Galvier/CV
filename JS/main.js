import { scrollToId } from ".scrollpage";
import { getScrollByHref } from ".scrollpage";

const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToId);

})

