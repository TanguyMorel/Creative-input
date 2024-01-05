const button = document.querySelector(".button");
const input = document.querySelector("header form input");
const send = document.querySelector(".send");
const msg = document.querySelector(".email-sent-txt");

function inputInAnim() {
  input.classList.add("inputIsActive");
  button.classList.add("buttonIsActive");
  send.classList.add("sendIsActive");
}

button.addEventListener("click", inputInAnim);

function inputOutAnim() {
  input.classList.add("inputAnimOut");
  input.classList.remove("inputIsActive");
  button.classList.remove("buttonIsActive");
  button.classList.add("emailSent");
  send.classList.remove("sendIsActive");

  setTimeout(() => {
    input.classList.add("inputAnimOut2");
    msg.classList.add("txt-active");
  }, 300);
}

send.addEventListener('click', e => {

  if (input.checkValidity()){
    e.preventDefault
    console.log("hey");
    inputOutAnim();
    input.style.outline = 'none'
  } else{
    input.style.outline = 'red solid 2px'
  }

})
