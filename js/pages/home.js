// component imports
import { blockData } from '../data/blocks-section-data.js';
import {renderBlocks} from '../components/moving-blocks.js';
// components execution

/* CUSTOM STYLE GOES BELOW THIS COMMENT LINE */

/* header: start */
/* header: end */

/* hero: start */
/* hero: end */

/* what we do: start */
/* what we do: end */

/* our team: start */
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