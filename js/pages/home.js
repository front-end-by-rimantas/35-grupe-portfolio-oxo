// component imports
import { blockData } from '../data/blocks-section-data.js';
/*import {renderBlocks} from '../components/moving-blocks.js';*/
import { Carousel } from '../components/moving-blocks/carousel.js';
import { BlockCard } from '../components/moving-blocks/moving-blocks.js';
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
    const heroPosition = 90;
    if (scrollY > heroPosition) {
        heroDOM.classList.add('active');
    } else {
        heroDOM.classList.remove('active');
    }
});
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

// const [blockError, blockContent] = renderBlocks(3857, blockData);
// const [blockError, blockContent] = renderBlocks('', blockData);
// const [blockError, blockContent] = renderBlocks('bbd', blockData);
// const [blockError, blockContent] = renderBlocks('header', blockData);
// const [blockError, blockContent] = renderBlocks('#block-generator', 3589);
// const [blockError, blockContent] = renderBlocks('#block-generator', null);
// const [blockError, blockContent] = renderBlocks('#block-generator', {});
//  const [blockError, blockContent] = renderBlocks('#block-generator', []);
// const [blockError, blockContent] = renderBlocks('#block-generator', [123]);
// const [blockError, blockContent] = renderBlocks('#block-generator', [null, [], {}]);
// const [blockError, blockContent] = renderBlocks('#block-generator', [{}]);
// const [blockError, blockContent] = renderBlocks('#block-generator', [{}, {a: 2}, {b: 'b', c: 'c'}, {b: 'b', c: 'c', d: 'd'}]);
// const [blockError, blockContent] = renderBlocks('#block-generator', [{}, {a: 2}, {b: 'b', c: 'c'}, {b: 'b', c: 'c', d: 'd', e: false}]);
// const [blockError, blockContent] = renderBlocks('#block-generator', [{ceoName: 'a', decript: 'b', title: 4}]);
// const [blockError, blockContent] = renderBlocks('#block-generator', [{ceoName: 'a', decript: 'b', title: '2'}]);


/*const [blockError, blockContent] = renderBlocks('#block-generator', blockData);


// Padarom, kad respons spausdintu, tik kai yra klaida, jeigu true yra klaida!
if (blockError) {
    console.error(blockContent);
}

*/
new Carousel('#block-generator', BlockCard, blockData, {
    size: {
        mobile: 1,
        tablet: 2,
        desktop: 3,
    },
    previousNext: true,
});

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