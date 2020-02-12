"use strict";

const btn = document.querySelectorAll('.btn');
const checkBox = document.querySelector('#checkbox');

btn.forEach(item => {
    console.log(btn)
    item.addEventListener('click', event => {
        item.classList.toggle('btn-green');
    });
})


checkBox.addEventListener('change', event => {
    console.log(event)
});