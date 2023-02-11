import throttle from 'lodash.throttle';

const formValue = document.querySelector('form');

let formDataSet = {};

formValue.addEventListener('input', throttle(getValueTextArea, 500));

function getValueTextArea(event) {
  formDataSet[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formDataSet));
}

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

formValue.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  formValue.reset();
};