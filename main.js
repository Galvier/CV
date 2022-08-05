import { scrollToId } from "./scrollpage.js";

const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToId);

})

