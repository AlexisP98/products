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
        let contenuto = item.querySelector('.contenuto');
        let iconaPiu = item.querySelector('.piu');
        let iconaMeno = item.querySelector('.meno');


        bottone.addEventListener('click', event => {
            contenuto.classList.toggle("visibile");

            if (iconaPiu.hasClass("show")) {
                iconaPiu.removeClass("show");
                iconaMeno.addClass("show");
            }
        })
    })


