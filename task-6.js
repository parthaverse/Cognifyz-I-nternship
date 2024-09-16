
function showLoginForm() {
  document.getElementById('loginFormContainer').classList.toggle('active');
}
function data() {
  let a = document.getElementById('name').value;
  let b = document.getElementById('mail').value;
  let c = document.getElementById('num').value;
  let d = document.getElementById('pass').value;
  let e = document.getElementById('pass2').value;

  if (a === '' || b === '' || c === '' || d === '' || e === '') {
    alert("Please fill all fields.");
    return false;
  } 
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b)) {
    alert('Please enter a valid email address.');
    return false;
  } 
  else if ((c.length !== 10) || isNaN(c)) {
    alert('Please enter a valid 10-digit number.');
    return false;
  } 
  else if (d.length < 6 || d.length > 10) {
    alert('Password length must be between 6 and 10');
    return false;
  } 
  else if (d !== e) {
    alert('Password & confirm password do not match.');
    return false; 
  }
  else {
    return true;
  }
}
function submitForm() {
  if (data()) {
    document.getElementById('registrationForm').submit();
  }
}
function resetForm() {
  document.getElementById('registrationForm').reset();
}