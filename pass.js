function generatePassword() {
  const length = document.getElementById("length").value;
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=-[]{}|;:,.<>?";

  let allChars = "";
  if (useUpper) allChars += upper;
  if (useLower) allChars += lower;
  if (useNumbers) allChars += numbers;
  if (useSymbols) allChars += symbols;

  if (allChars === "") {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}