import throttle from 'lodash.throttle';

const formValue = document.querySelector('form');
const buttonSubmit = document.querySelector('button');

const formDataSet = {};


formValue.addEventListener('input', throttle(getValueTextArea, 500));

function getValueTextArea(event) {
  formDataSet[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formDataSet));
}

const dataBackEnd = localStorage.getItem('feedback-form-state');

buttonSubmit.addEventListener('click', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(dataBackEnd)); 
  localStorage.removeItem('feedback-form-state');
  formValue.reset();
};

function getValueLocalStorage() {

  try {
    const formDataGet = JSON.parse(dataBackEnd);
    formValue.email.value = formDataGet.email;
    formValue.message.value = formDataGet.message;
  } catch (error) {
    console.log(error.name); 
    console.log(error.message); 
  }

};

getValueLocalStorage();