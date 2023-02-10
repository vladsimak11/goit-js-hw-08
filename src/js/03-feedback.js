import throttle from 'lodash.throttle';

const formValue = document.querySelector('form');
const buttonSubmit = document.querySelector('button');
getValueLocalStorage();

const formDataSet = {};

formValue.addEventListener('input', throttle(getValueTextArea, 500));

function getValueTextArea(event) {
  formDataSet[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formDataSet));
}

buttonSubmit.addEventListener('click', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log('Відправляємо форму');

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

function getValueLocalStorage() {
  const saveMessage = localStorage.getItem('feedback-form-state');
  const formDataGet = JSON.parse(saveMessage);

  try {
    const formDataGet = JSON.parse(saveMessage);
    formValue.email.value = formDataGet.email;
    formValue.message.value = formDataGet.message;
  } catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // "Unexpected token u in JSON at position 1"
  }
  
  console.log(formDataGet);
};

