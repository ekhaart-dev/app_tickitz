const none = document.getElementById("card-none");
const show = document.getElementById("card-show");
none.addEventListener("click", function() {
  if (show.style.display === "flex") {
    none.style.display = "none";
  } else {
    show.style.display = "flex";
  }
});

const btn_month = document.getElementById("month-btn");

btn_month.addEventListener("click", function() {
  btn_month.classList.toggle("active");
});


document.getElementById("profileButton").addEventListener("click", function() {
  var dropdown = document.getElementById("profileDropdown");
  dropdown.classList.toggle("hidden");
});

document.getElementById("mobileMenuButton").addEventListener("click", function() {
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
});

document.getElementById("openModalButton").addEventListener("click", function() {
  var searchModal = document.getElementById("searchModal");
  searchModal.classList.remove("hidden");
});

document.getElementById("closeModalButton").addEventListener("click", function() {
  var searchModal = document.getElementById("searchModal");
  searchModal.classList.add("hidden");
});

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
togglePassword.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.querySelector('#eyeClosed').style.display = 'none';
    togglePassword.querySelector('#eyeOpen').style.display = 'block';
  } else {
    passwordInput.type = 'password';
    togglePassword.querySelector('#eyeClosed').style.display = 'block';
    togglePassword.querySelector('#eyeOpen').style.display = 'none';
  }
});