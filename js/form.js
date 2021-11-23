let nameInput = document.querySelector("[name='name']");
let nameInput = document.querySelector("[name='email']");
let nameInput = document.querySelector("[name='mobile']");
let nameInput = document.querySelector("[name='message']");

document.forms[7].onsubmit = function (e) {

          let nameValid = false;
          let emailValid = false;
          let mobileValid = false;
          let messageValid = false;

          if (nameInput.value !== "") {
                    nameInput = true;
          }

          if (emailInput.value !== "") {
                    emailInput = true;
          }

          if (mobileValid.value !== "") {
                    mobileValid = true;
          }

          if (messageValid.value !== "") {
                    messageValid = true;
          }


          if (nameValid === false || emailValid === false || mobileValid === false || messageValid === false ) {
                    e.preventDefault();
          }

}

document.links[0].onclick = function (event) {
          event.preventDefault();
}