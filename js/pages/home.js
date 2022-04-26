// component imports
import { blockData } from '../data/blocks-section-data.js';
import {renderBlocks} from '../components/moving-blocks.js';
// components execution

/* CUSTOM STYLE GOES BELOW THIS COMMENT LINE */

/* header: start */

function scrollFunc() {    
    const headerPossition = 660;

    if (scrollY > headerPossition) {
        mainHeaderDOM.classList.add('fixed')
    } else {
        mainHeaderDOM.classList.remove('fixed')
    }
}

const mainHeaderDOM = document.querySelector('.row');

addEventListener('scroll', scrollFunc);
scrollFunc();
/* header: end */

/* hero: start */
const heroDOM = document.querySelector('.axis');

addEventListener('scroll', function () {
    const heroPosition = 80;
    if (scrollY > heroPosition) {
        heroDOM.classList.add('active');
    } else {
        heroDOM.classList.remove('active');
    }
})
/* hero: end */

/* what we do: start */
/* what we do: end */

/* our team: start */
const imageStyleDOM = document.querySelector('.team-girl');
const imageStyleDOM2 = document.querySelector('.team-boy');
addEventListener('scroll', function () {
    const pagePosision = 2450;
    if (scrollY > pagePosision) {
        imageStyleDOM.classList.remove('hide');
    }else {
        imageStyleDOM.classList.add('hide');
    }
})
addEventListener('scroll', function () {
    const pagePosision2 = 2100;
    if (scrollY > pagePosision2) {
        imageStyleDOM2.classList.remove('hide');
    }else {
        imageStyleDOM2.classList.add('hide');
    }
})
/* our team: end */

/* moving blocks: start */
renderBlocks('#block-generator', blockData);
/* moving blocks: end */

/* questions: start */
document.querySelectorAll('.accordion-item-trigger').forEach((item) =>
item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('accordion-item--active')) {
        parent.classList.remove('accordion-item--active');
    } else {
        document.querySelectorAll('.accordion-item').forEach((child) => child.classList.remove('accordion-item--active'))
        parent.classList.add('accordion-item--active');
    }
    })
)
/* questions: end */

/* free trial: start */
/* free trial: end */

/* form: start */
/* form: end */

/* footer: start */
/* footer: end */