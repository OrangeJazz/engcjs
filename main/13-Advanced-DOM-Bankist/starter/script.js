'use strict';


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////
// Implementing Smooth Scrolling


btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());  // характеристика положения элемента относительно видимой части страницы

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // расстояние Х,Y от начала страницы до видимой части

  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth); //высота и ширина видимой части страницы

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window, scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth', //чтобы скролл был плавным
  // });

  // Modern way to add scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});


///////////////////////////////////////
// Page Navigation

/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); // Работает, но неэффективно, так как создает одинаковые функции для каждой из кнопок меню
*/

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  e.preventDefault();

  // Matching stratagy
  if (e.target.classList.contains('nav__link')) {
    // console.log('link');    
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// Building a Tabbed Component




/*
tabs.forEach(t => t.addEventListener('click', () => console.log('TAB '))); // BAD SOLUTION
*/

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(el => el.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

// Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
/*
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
  
});
*/

// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Revealing Elements on Scroll
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold:0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);

};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  let currentSlide = 0;
  const maxSlide = slides.length;
  const dotsContainer = document.querySelector('.dots');

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-700px)';
  // slider.style.overflow = 'visible';

  //slides.forEach((s, i) => s.style.transform = `translateX(${100*i}%)`);
  // 0%, 100%, 200%, 300%


  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
    })
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
  
    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
  };


  // Next slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    };
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1
    } else {
      currentSlide--;
    };
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();

  // Event handlers

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowRight') nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // console.log('DOT');
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    };
  });
};
slider();




/*

/////////////////////////////////////////////////////////
// Selecting, Creating, and Deleting Elements

//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // NodeList
console.log(allSections);

document.getElementById('section--1');   
const allButtons = document.getElementsByTagName('button'); //HTML collection
console.log(allButtons);

document.getElementsByClassName('btn'); //HTML collection

// Creating and Inserting elements
// .insertAdjacentHTML // !!!!!!!!

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We uose cookied for improved functionality and analytics.';
message.innerHTML = 'We uose cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete element

document.querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });


  //////////////////////////////////////////
  // Styles, Attributes and Classes

  // Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // не был задан в коде, поэтому не прочитается
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color); // показать любое свойство объекта
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

// присвоить или установить атт
logo.alt = 'Beautiful minimalist logo';

//undefined
console.log(logo.designer); //т.к. это нестандартное свойство

console.log(logo.getAttribute('designer')); // для нестандартных атт
logo.setAttribute('company', 'Bankist'); //задать нестандартный атт

console.log(logo.src); // абсолютный URL, не как в коде
console.log(logo.getAttribute('src')); // URL как в коде HTML

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c','j');
logo.classList.toggle('c');
logo.classList.contains('c'); //NOT includes

// Don't use
logo.className = 'jonas' //отменяет все классы, замещая их одним указанным
*/

///////////////////////////////////
// Implementing Smooth Scrolling

////////////////////////////////////
// Types of Events and Event Handlers
/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  // h1.removeEventListener('mouseenter', alertH1); //убирает функцию, привязанную к событию
};

h1.addEventListener('mouseenter', alertH1); // срабатывает при наведении мыши на заголовок

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };
*/
////////////////////////////////
// Event Propagation: Bubbling and Capturing

///////////////////////////////////
// Event Propagation in Practice
/*
// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target, e.currentTarget);
},
  true
);

*/
//////////////////////////
// Event Delegation: Implementing Page Navigation

///////////////////////////
// DOM Traversing
/*
const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight')); //NodeList of child h1 with class 'highlight'
console.log(h1.childNodes); // NodeList of all child elements h1
console.log(h1.children); // HTML collection of child tags elements of h1 (direct children)
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode); //direct parent
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling); //the direct sibling Elements (tags...)
console.log(h1.nextElementSibling);

console.log(h1.previousSibling); // direct sibling in NodeList (text...)
console.log(h1.nextSibling);

console.log(h1.parentElement.children); //to take all sibling elements, not only direct, HTML collection
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/

//////////////////////////
// Building a Tabbed Component

/////////////////////////
// Passing Arguments to Event Handlers ??? повторить foo.bind()

///////////////////
// Implementing a Sticky Navigation: The Scroll Event

/////////////////////////
// A Better Way: The Intersection Observer API
/*
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/

/////////////////////////////////
// Revealing Elements on Scroll

////////////////////////////
// Lazy Loading Images

/////////////////////////////////
// Building a Slider Component

///////////////////////////////////
//  Lifecycle DOM Events
/*
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree build!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});


window.addEventListener('beforeunload', function (e) {
  e.preventDefault(); //need to some brousers (not for google chrome)
  console.log(e);
  e.returnValue = '';
})


*/

////////////////////////////////
// Efficient Script Loading: defer and async

