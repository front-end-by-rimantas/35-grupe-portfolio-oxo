/* header: start */

// ham toggle
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.nav')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menuNav.classList.toggle('open');
});

// accordion
let accordions = document.getElementsByClassName('nav-link');

for (let i = 0; i < accordions.length; i++) {

    accordions[i].onclick = function () {
        let dropList = this.nextElementSibling;

        if (dropList.style.maxHeight) {
            dropList.style.maxHeight = null;
        } else {
            dropList.style.maxHeight = dropList.scrollHeight + 'px';
        }
    }
}

/* header: end */
/* up-to-top: start */
function manoFun() {
    const pagePosision = 900;
    if (scrollY > pagePosision) {
         arrowDOM.classList.add('upVisible');
    }else {
       arrowDOM.classList.remove('upVisible');
    }
}
const arrowDOM = document.querySelector('.upTop');

const virsus = document.querySelector('#scrollUp');
virsus.addEventListener('click', function () {
    window.scrollTo(0, 0);
})
addEventListener('scroll', manoFun);
manoFun();
/* up-to-top: end */