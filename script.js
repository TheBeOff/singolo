/*-------     HEADER     -------*/
const MENU  = document.getElementById('menu');
const BUTTON = document.getElementById('button');
const BUTTON_CLOSE = document.getElementById('button-close')

MENU.addEventListener('click', function(event) {
    MENU.querySelectorAll('a').forEach(elem => elem.classList.remove('colored'));
    event.target.classList.add('colored');
})

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    let currentPos = window.scrollY;
    let sections = document.querySelectorAll('body > header, section');
    let links = document.querySelectorAll('#menu a');

    sections.forEach(el => {
        if(el.offsetTop <= currentPos && (el.offsetTop + el.offsetHeight) > currentPos || currentPos == 2586) {
            links.forEach(a => {
                a.classList.remove('colored');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('colored');
                }
            })
        }
    })
}

/*-------     SLIDER     -------*/

let items = document.querySelectorAll('.slide');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(num) {
    currentSlide = (num + items.length) % items.length;
}

function hideSlide(direction) {
    isEnabled = false;
    items[currentSlide].classList.add(direction);
    items[currentSlide].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
}

function showSlide(direction) {
    items[currentSlide].classList.add('next', direction);
    items[currentSlide].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function previousSlide(num) {
    hideSlide('to-right');
    changeCurrentSlide(num - 1);
    showSlide('from-left');
}

function nextSlide(num) {
    hideSlide('to-left');
    changeCurrentSlide(num + 1);
    showSlide('from-right');
}

document.querySelector('.chev-left').addEventListener('click', function() {
    if (isEnabled) {
        previousSlide(currentSlide);
    }
})

document.querySelector('.chev-right').addEventListener('click', function() {
    if (isEnabled) {
        nextSlide(currentSlide);
    }
})

/*-------     SLIDER (SCREEN)     -------*/

let vphone = document.getElementById('first');

vphone.addEventListener('click', function(elem) {
    vphone.querySelectorAll('.screen1').forEach(el => {
        el.classList.add('visible')
    })
    elem.target.classList.remove('visible');
    
})

let hphone = document.getElementById('second');

hphone.addEventListener('click', function(elem) {
    hphone.querySelectorAll('.screen2').forEach(el => {
        el.classList.add('visible')
    })
    elem.target.classList.remove('visible');
    
})

/*-------     PORTFOLIO     -------*/

let buttons = document.getElementById('buttons');

buttons.addEventListener('click', function(btn) { 
    buttons.querySelectorAll('button').forEach(elem => {
        elem.classList.remove('colored');
        btn.target.classList.add('colored');
    });
    
    
})

let all = document.getElementById('all');
let webDesign = document.getElementById('web-design');
let graphicDesign = document.getElementById('graphic-design');
let artwork = document.getElementById('artwork');

let img1 = document.getElementById('image1').src;
let img2 = document.getElementById('image2').src;
let img3 = document.getElementById('image3').src;
let img4 = document.getElementById('image4').src;
let img5 = document.getElementById('image5').src;
let img6 = document.getElementById('image6').src;
let img7 = document.getElementById('image7').src;
let img8 = document.getElementById('image8').src;
let img9 = document.getElementById('image9').src;
let img10 = document.getElementById('image10').src;
let img11 = document.getElementById('image11').src;
let img12 = document.getElementById('image12').src;

all.addEventListener('click', function() {
    document.getElementById('image1').src = img1;
    document.getElementById('image2').src = img2;
    document.getElementById('image3').src = img3;
    document.getElementById('image4').src = img4;
    document.getElementById('image5').src = img5;
    document.getElementById('image6').src = img6;
    document.getElementById('image7').src = img7;
    document.getElementById('image8').src = img8;
    document.getElementById('image9').src = img9;
    document.getElementById('image10').src = img10;
    document.getElementById('image11').src = img11;
    document.getElementById('image12').src = img12;
})

webDesign.addEventListener('click', function() {
    document.getElementById('image1').src = img2;
    document.getElementById('image2').src = img4;
    document.getElementById('image3').src = img6;
    document.getElementById('image4').src = img10;
    document.getElementById('image5').src = img1;
    document.getElementById('image6').src = img7;
    document.getElementById('image7').src = img8;
    document.getElementById('image8').src = img11;
    document.getElementById('image9').src = img3;
    document.getElementById('image10').src = img5;
    document.getElementById('image11').src = img9;
    document.getElementById('image12').src = img12;
})

graphicDesign.addEventListener('click', function() {
    document.getElementById('image1').src = img3;
    document.getElementById('image2').src = img1;
    document.getElementById('image3').src = img5;
    document.getElementById('image4').src = img7;
    document.getElementById('image5').src = img4;
    document.getElementById('image6').src = img11;
    document.getElementById('image7').src = img2;
    document.getElementById('image8').src = img12;
    document.getElementById('image9').src = img8;
    document.getElementById('image10').src = img6;
    document.getElementById('image11').src = img10;
    document.getElementById('image12').src = img9;
})

artwork.addEventListener('click', function() {
    document.getElementById('image1').src = img12;
    document.getElementById('image2').src = img9;
    document.getElementById('image3').src = img5;
    document.getElementById('image4').src = img7;
    document.getElementById('image5').src = img10;
    document.getElementById('image6').src = img11;
    document.getElementById('image7').src = img2;
    document.getElementById('image8').src = img3;
    document.getElementById('image9').src = img4;
    document.getElementById('image10').src = img8;
    document.getElementById('image11').src = img1;
    document.getElementById('image12').src = img6;
})

let images = document.querySelectorAll('.portfolio-img');

for (elem of images) {
    elem.addEventListener('click',function(el) {
        images.forEach(elem => elem.classList.remove('border'));
        el.target.classList.add('border');
    })
}

/*-------     FORM     -------*/

BUTTON.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('body').classList.add('overflow');
    let subject = document.getElementById('subject').value.toString();
    let comment = document.getElementById('comment').value.toString();
    if (subject == '') {
        document.getElementById('subject-p').innerHTML = 'Без темы';
    } else {
        document.getElementById('subject-result').innerText = subject;
    }
    if (comment == '') {
        document.getElementById('comment-p').innerHTML = 'Без описания';
    } else {
        document.getElementById('comment-result').innerText = comment;
    };
    document.getElementById('message-box').classList.remove('hidden');
    
})

BUTTON_CLOSE.addEventListener('click',function() {
    document.getElementById('message-box').classList.add('hidden');
    document.querySelector('body').classList.remove('overflow');
    document.getElementById('name').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('comment').value = '';
})
