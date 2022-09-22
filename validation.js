const validate = () => {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;

  chekUserName(username);
  chekEmail(email);
  chekPass(pass);
  matchCPass(pass, cpass);
};

const chekUserName = (username) => {
  if (username.length < 8) {
    document.getElementById("username").classList.add("err");
    document.getElementById("username_err").innerHTML =
      "must be at least 8 digits!";
  } else {
    document.getElementById("username").classList.add("suc");
    document.getElementById("username").classList.replace("err", "suc");
    document.getElementById("username_err").innerHTML = "";
  }
};
const chekEmail = (email) => {
  if (email.length > 7 && email.includes("@gmail.com")) {
    document.getElementById("email").classList.add("suc");
    document.getElementById("email").classList.replace("err", "suc");
    document.getElementById("email_err").innerHTML = "";
  } else {
    document.getElementById("email").classList.add("err");
    document.getElementById("email_err").innerHTML =
      "must be at least 8 digits!";
  }
};
const chekPass = (pass) => {
  if (pass.length > 7 && pass.includes("_")) {
    document.getElementById("pass").classList.add("suc");
    document.getElementById("pass").classList.replace("err", "suc");
    document.getElementById("pass_err").innerHTML = "";
  } else {
    document.getElementById("pass").classList.add("err");
    document.getElementById("pass_err").innerHTML =
      "must be at least 8 digits & contain ( _ )!";
  }
};
const matchCPass = (pass, cpass) => {
  if (cpass != pass) {
    document.getElementById("cpass").classList.add("err");
    document.getElementById("cpass_err").innerHTML = "must be same password!";
  } else {
    document.getElementById("cpass").classList.add("suc");
    document.getElementById("cpass").classList.replace("err", "suc");
    document.getElementById("cpass_err").innerHTML = "";
  }

  if (pass == "" && cpass == "") {
    document.getElementById("cpass").classList.add("err");
    document.getElementById("pass_err").innerHTML = "cannot be empty!";
    document.getElementById("cpass_err").innerHTML = "cannot be empty!";
  }
};
