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