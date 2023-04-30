const throttle = require('lodash.throttle');
const saveObjToLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (e) {
    alert(`There was a mistake ${e.toString()}`);
  }
};

const loadObjFromLocalStorage = key => {
  try {
    const parsedObj = JSON.parse(localStorage.getItem(key));
    return parsedObj;
  } catch (e) {
    alert(`There was a mistake ${e.toString()}`);
  }
};

// input.addEventListener('input', test);
// const getEntryForm = key => document.querySelectorAll(`form[name="${key}"]`);
// console.log(getEntryForm);
// const getEntryForm = document.querySelectorAll(`form[name="${key}"]`);
// działa
// const getEntryInput = document.querySelector(`input[name="email"]`);

const entryInput = document.querySelector('.feedback-form');
console.log(`firstchild ${entryInput.firstElementChild}`);
const button = document.querySelector('BUTTON');
// console.log(button);

function whenSubmit(event) {
  event.preventDefault();
  console.log(`email: ${entryInput[0].value}`);
  console.log(`message: ${entryInput[1].value}`);
  localStorage.removeItem('feedback-form-state');
  entryInput[0].value = '';
  entryInput[1].value = '';
}

// function ifReloadPage() {
//   if ((document.location.reload(true)) && ((localStorage.getItem("feedback-form-state") = null))) {
//     entryInput[0].value = 'email';
//     entryInput[1].value = 'message';
//   } else {
//     entryInput[0].value = '1';
//     entryInput[1].value = '2';
//   }
// }

// net - sprawdzić - dziwnie działa -
// if (window.PerformanceNavigationTiming) {
//   console.info('window.performance works fine on this browser');

//   if (PerformanceNavigationTiming.type === 'reload') {
//     console.info('This page is reloaded');
//   } else {
//     console.info('This page is not reloaded');
//   }
// }
// net - koniec
button.addEventListener('click', whenSubmit);

entryInput.addEventListener(
  'input',

  event => {
    // event.preventDefault();
    console.log(`event target: ${event.target.value}`);
    console.log(
      `event current target: ${event.currentTarget}, typeof event.currentTarget`
    );
    const {
      elements: { email, message },
    } = event.currentTarget;
    const container = { email: email.value, message: message.value };
    console.log(container);
    saveObjToLocalStorage('feedback-form-state', container);
  }
);
console.log(localStorage.getItem('feedback-form-state'));

//throttle - wzór
// throttle(function(), 500, ('trailing: false'));

// poprzednie zadanie z event.target
// const form = document.querySelector('.login-form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;
//   if (email.value && password.value) {
//     const container = { email: email.value, password: password.value };
//     console.log(container);
//     form.reset();
//   } else {
//     alert('Oba pola muszą zostać wypełnione!');
//   }
// });
