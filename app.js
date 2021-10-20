let signUpBtn = document.querySelector(".signup-btn");
let signInBtn = document.querySelector(".signin-btn");
let formsWrapper = document.querySelector(".forms-wrapper");
let newMsg = document.querySelector("#msg");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.add("change");
  document.querySelector("#msg").innerHTML = "";
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formsWrapper.classList.remove("change");
  document.querySelector("#msg").innerHTML = "";
});

  e.preventDefault();
  newMsg.append(`Good to have you back!`);
});

signUpSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let newMember = document.querySelector("#name").value.split(" ")[0]; 
  newMsg.append(`Welcome to the forum ${newMember}!`); 
});
