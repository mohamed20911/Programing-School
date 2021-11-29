const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// Encode an SVG element as a base64 data uri.
function svgToBase64Image(svgElement) {
  var div = document.createElement("div");
  div.appendChild(svgElement.cloneNode(true));
  var b64 = window.btoa(div.innerHTML);
  return "data:image/svg+xml;base64," + b64;
}
var svgs = document.getElementsByTagName("svg");
var urls = [];
for (var i = 0; i < svgs.length; i++)
  urls.push('url("' + svgToBase64Image(svgs[i]) + '")');
var url = urls.join(",");
var msg =
  "Base64 CSS image (for cross-browser support):" +
  "<br><br>background: " +
  url +
  ";";
document.getElementById("code").innerHTML = msg;
document.body.style.background = url;
