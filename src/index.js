"use strict";

/*const btn = document.querySelectorAll('.btn');
const checkBox = document.querySelector('#checkbox');

if (btn.length > 0 || checkBox) {
    btn.forEach(item => {
        console.log(btn)
        item.addEventListener('click', event => {
            item.classList.toggle('btn-green');
        });
    })
    checkBox.addEventListener('change', event => {
        console.log(event)
    });
}*/


//un accordion
/*
const accordion = document.querySelector('.accordion');
const bottone = accordion.querySelector('.btn');
const contenuto = accordion.querySelector('.contenuto');

    bottone.addEventListener('click', event => {
        contenuto.classList.toggle("visibile");
    })
*/

//più accordion


const accordion = document.querySelectorAll('.accordion');

    accordion.forEach(item => {
        let bottone = item.querySelector('.btn');
        let icona = item.querySelector('.fa.fa-plus');

        let contenuto = item.querySelector('.contenuto');

        bottone.addEventListener('click', event => {
            contenuto.classList.toggle("visibile");
            icona.classList.toggle('fa-plus');
            icona.classList.toggle('fa-minus');
        })
    })


