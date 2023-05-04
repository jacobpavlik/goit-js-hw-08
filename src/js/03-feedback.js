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

// działa
// const getEntryInput = document.querySelector(`input[name="email"]`);

const entryInput = document.querySelector('.feedback-form');
const button = document.querySelector('BUTTON');

function whenSubmit(event) {
  event.preventDefault();
  console.log(`email: ${entryInput[0].value}`);
  console.log(`message: ${entryInput[1].value}`);
  localStorage.removeItem('feedback-form-state');
  entryInput[0].value = '';
  entryInput[1].value = '';
}

function ifReloadPage() {
  const savedData = loadObjFromLocalStorage('feedback-form-state');

  // if ((savedData = 'null')) {
  //   entryInput[0].value = '';
  //   entryInput[1].value = '';
  // } else {
  entryInput[0].value = savedData.email;
  entryInput[1].value = savedData.message;
}

window.addEventListener('load', ifReloadPage);
// window.addEventListener('load', () => {}); z wykładu -> sprawdzić

button.addEventListener('click', whenSubmit);

entryInput.addEventListener(
  'input',
  throttle(event => {
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
  }),
  500,
  'trailing: false'
);
console.log(localStorage.getItem('feedback-form-state'));

//throttle - wzór
// throttle(function(), 500, ('trailing: false'));
