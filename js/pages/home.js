// component imports

// components execution

/* CUSTOM STYLE GOES BELOW THIS COMMENT LINE */

/* header: start */
const mainHeaderDOM = document.querySelector ('.header-row')

addEventListener ('scroll', function () {
    const headerPossition = 660;
    if (scrollY < headerPossition) {
        mainHeaderDOM.classList.remove ('fixed')
    }
    if (scrollY > headerPossition) {
        mainHeaderDOM.classList.add ("fixed")
    }
})
/* header: end */

/* hero: start */
/* hero: end */

/* what we do: start */
/* what we do: end */

/* our team: start */
/* our team: end */

/* moving blocks: start */
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