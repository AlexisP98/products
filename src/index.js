/* "use strict";

const btn = document.querySelectorAll('.btn');
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
} */

let accordionIconClosed = "fa-chevron-down";
let accordionIconOpen = "fa-chevron-up";

/* ### - DYNAMIC ACCORDION - ##################################################################### */

const a = [
    {title:'title-1',content:'content-1'},
    {title:'title-2',content:'content-2'},
    {title:'title-3',content:'content-3'}
];
a.push( {title:'title-n',content:'content-n'} );
const container = document.querySelector('#abs-accordion-dynamic-container');
a.forEach(generateAccordions);

function generateAccordions(elem,index)
{
    /* for(let i=0; i<a.length; i++ ) */
    const theOneBlockAccordion =   `<div class="abs-accordion-container">
                    <div id="abs-acc${index}" class="abs-accordion-header bg-light">
                        ${elem.title}
                        <i class="abs-accordion-icon fas ${accordionIconClosed}"></i>
                    </div>
                    <div id="abs-acc${index}-content" class="abs-accordion-content hidden">
                        ${elem.content}
                    </div>
                </div>`;
    container.insertAdjacentHTML("beforeend",theOneBlockAccordion);
}

/* 
const accordionContainer = document.createElement('div');
container.appendChild(accordionContainer);
const accordionHeader = document.createElement('div');
accordionHeader.setAttribute("id", "abs-acc"+id);
accordionHeader.classList.add('abs-accordion-header');
const accordionIcon = document.createElement('i');
accordionIcon.classList.add('abs-accordion-icon','fa',accordionIconClosed);
//temp.createTextNode(title) // text node for 'title'
//accordionHeader.appendChild(temp);
accordionHeader.appendChild(accordionIcon);
accordionContainer.appendChild(accordionHeader);
const accordionContent = document.createElement('div');
accordionContent.setAttribute("id", "abs-acc"+id+"-content");
accordionContent.setAttribute('class','abs-accordion-content hidden');
//temp.createTextNode(content) // text node for 'content'
//accordionContent.appendChild(temp);
accordionContainer.appendChild(accordionContent);
 */

container.lastElementChild.classList.add('ciao','ciao2','ciao3');

/* ### - ACCORDION - ##################################################################### */

/*
// viene assegnato a tutti gli elementi presenti nel template, con classe "accordion-header"
// l'evento di click che esegue la funzione "toggleAccordion()"
let accordions = document.querySelectorAll(".abs-accordion-header");
for(let i=0; i<accordions.length; i++)
{ accordions[i].addEventListener("click", toggleAccordion); }

// tramite evento, leggo l'ID dell'elemento chiamante e per via di una regola ad-hoc
// costruisco il corretto ID dell'elemento content da aprire
function toggleAccordion(event)
{
    let accordionHeader = event.target.id;
    let accordionContent = document.querySelector("#" + accordionHeader + "-content" );
    let accordionIcon = document.querySelector("#" + accordionHeader + " i");

    if( accordionContent.classList.contains("hidden") )
    {
        accordionIcon.classList.remove(accordionIconClosed);
        accordionIcon.classList.add(accordionIconOpen);
    }
    else
    {
        accordionIcon.classList.remove(accordionIconOpen);
        accordionIcon.classList.add(accordionIconClosed);
    }

    accordionContent.classList.toggle("hidden");
} */

let accordions = document.querySelectorAll(".abs-accordion-container");
for(let i=0; i<accordions.length; i++)
{ 
    const header = accordions[i].querySelector('.abs-accordion-header');
    const content = accordions[i].querySelector('.abs-accordion-content');
    assignEvent(header, content);
}

function assignEvent(header, content)
{
    header.addEventListener("click", () => {
        const icon = header.querySelector('.abs-accordion-icon');
        if( content.classList.contains("hidden") )
        {
            icon.classList.remove(accordionIconClosed);
            icon.classList.add(accordionIconOpen);
        }
        else
        {
            icon.classList.remove(accordionIconOpen);
            icon.classList.add(accordionIconClosed);
        }
        content.classList.toggle("hidden");
    });

    /* const targetedAccordionContent = event.target.querySelector('.abs-accordion-content');
    const targetedAccordionIcon = event.target.querySelector('.abs-accordion-icon');
    targetedAccordionContent.classList.toggle("hidden");
    console.log("assigned consts - checking for icon");

    if( targetedAccordionContent.classList.contains("hidden") )
    {
        console.log("accordion is closed");
        targetedAccordionIcon.classList.remove(accordionIconClosed);
        targetedAccordionIcon.classList.add(accordionIconOpen);
    }
    else
    {
        console.log("accordion is open");
        targetedAccordionIcon.classList.remove(accordionIconOpen);
        targetedAccordionIcon.classList.add(accordionIconClosed);
    } */
}