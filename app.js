const form = document.querySelector("#form");

// event listener for submit, preventing default behaviour
form.addEventListener('submit', (e) => {

      e.preventDefault();

      email();
});

//check if email is valid
function isEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
}

function email() {
      let mail = document.querySelector("#email").value;
      if (!mail) {
            error()
      } else {
            if (!isEmail(mail)) {
                  error();
            }
            else {
                  const hideError = document.querySelector(".hide-error");
                  hideError.classList.remove("show-error")
                  submit();
            }
      }
}

function error() {
      const hideError = document.querySelector(".hide-error");
      hideError.classList.add("show-error");
}

function submit() {
      const btn = document.querySelector("#btn");
      const email = document.querySelector("#email");

      btn.style.display = "none";
      email.style.display = "none";
}