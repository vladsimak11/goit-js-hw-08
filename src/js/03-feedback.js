import throttle from 'lodash.throttle';

const formValue = document.querySelector('form');
const buttonSubmit = document.querySelector('button');


const formDataSet = {};

formValue.addEventListener('input', throttle(getValueTextArea, 500));

function getValueTextArea(event) {
  formDataSet[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formDataSet));
}

buttonSubmit.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formDataSet);
  formValue.email.value = '';
  formValue.message.value = '';

  localStorage.removeItem('feedback-form-state');
};

function getValueLocalStorage() {
  const saveMessage = localStorage.getItem('feedback-form-state');

  try {
    const formDataGet = JSON.parse(saveMessage);
    formValue.email.value = formDataGet.email;
    formValue.message.value = formDataGet.message;
  } catch (error) {
    console.log(error.name); 
    console.log(error.message); 
  }
  
};

getValueLocalStorage();