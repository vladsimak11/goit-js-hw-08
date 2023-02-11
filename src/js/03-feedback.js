import throttle from 'lodash.throttle';

const formValue = document.querySelector('form');
const buttonSubmit = document.querySelector('button');

let formDataSet = {};


formValue.addEventListener('input', throttle(getValueTextArea, 500));

function getValueTextArea(event) {
  formDataSet[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formDataSet));
}



buttonSubmit.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formDataSet);
  localStorage.removeItem('feedback-form-state');
  formValue.reset();
  formDataSet = {};
};

function getValueLocalStorage() {

  try {
    const dataBackEnd = localStorage.getItem('feedback-form-state');
    const formDataGet = JSON.parse(dataBackEnd);
    formValue.email.value = formDataGet.email;
    formValue.message.value = formDataGet.message;
  } catch (error) {
    console.log(error.name); 
    console.log(error.message); 
  }

};

getValueLocalStorage();