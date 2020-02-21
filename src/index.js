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


/*più accordion statici
const accordion = document.querySelectorAll('.accordion');

    accordion.forEach(item => {
        let bottone = item.querySelector('.btn');
        let content = item.querySelector('.accordion-content');
        let icon = item.querySelector('.fa.fa-plus');

        bottone.addEventListener('click', event => {
            content.classList.toggle('visible');
        //icone esclusive
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
        })
    })
*/

//accordion dinamico

const accordionContainer = document.querySelector('.accordion-container');

const accordionElements = [ {title: 'titolo1', content:'contenuto1'}, 
                            {title: 'titolo2', content: 'contenuto2'},
                            {title: 'titolo3', content: 'contenuto3'}
                        ];

accordionElements.forEach(item => {
  /*  
    const accordion = 
    `<div class="accordion">
    <div class="row d-flex align-items-center">
        <div class="col-6">
            <div class="accordion-header bg-light">
                <h6 class="mb-0 px-3">
                ${item.title}
                </h6>
            </div>
        </div>
        <div class="col-6 d-flex justify-content-end">
            <button class="btn">
                <i class="fa fa-plus"></i>
            </button>
        </div>
        <div class="col-12">
            <div class="accordion-content visible">
                <p class="p-3 m-0">
                 ${item.content}
                </p>
            </div>
        </div>
    </div>`
    
    accordionContainer.insertAdjacentHTML('beforeend',accordion);*/


//CREAZIONE ELEMENTI
//accordion wrapper
const divAcc = document.createElement('div');
divAcc.classList.add('accordion');

//row
const divRow = document.createElement('div');
divRow.classList.add('row', 'd-flex', 'align-items-center');

//prima colonna
const divFirstCol = document.createElement('div');
divFirstCol.classList.add('col-6');

const divAccHeader = document.createElement('div');
divAccHeader.classList.add('accordion-header', 'bg-light');

const title = document.createElement('h6');
title.classList.add('mb-0', 'px-3');

const titleContent = document.createTextNode(item.title);

divRow.appendChild(divFirstCol);
divFirstCol.appendChild(divAccHeader);
divAccHeader.appendChild(title);
title.appendChild(titleContent);

//seconda colonna
const divSecondCol = document.createElement('div');
divSecondCol.classList.add('col-6', 'd-flex', 'justify-content-end');

const button = document.createElement('button');
button.classList.add('btn');

const icon = document.createElement('i');
icon.classList.add('fa', 'fa-plus')

button.appendChild(icon);
divSecondCol.appendChild(button);

//terza colonna
const divThirdCol = document.createElement('div');
divThirdCol.classList.add('col-12');

const divAccContent = document.createElement('div');
divAccContent.classList.add('accordion-content', 'visible');

const p = document.createElement('p');
p.classList.add('p-3', 'm-0');

const pContent = document.createTextNode(item.content);
p.appendChild(pContent);

divAccContent.appendChild(p);
divThirdCol.appendChild(divAccContent);

//matriosca

divAcc.appendChild(divRow);


divRow.appendChild(divSecondCol);
divRow.appendChild(divThirdCol);

accordionContainer.appendChild(divAcc);
//document.body.appendChild(accordionContainer);
});

const accordion = accordionContainer.querySelectorAll('.accordion');

accordion.forEach(item => {
    let bottone = item.querySelector('.btn');
    let content = item.querySelector('.accordion-content');
    let icon = item.querySelector('.fa.fa-plus');

    bottone.addEventListener('click', event => {
        content.classList.toggle('visible');
    //icone esclusive
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    })
})


 
 
 
 






     
    

