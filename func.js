// Function for Photos page redirect
let redirect = true;

function changeRedir() {
  redirect = false;
}

function redirecter() {
  if (redirect) {
    window.location.href = "https://www.instagram.com/photo.rpk/";
  }
}

// Function for the dropdown of the nav bar to stay for a second
var timeout;

function showDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display = "block";
    clearTimeout(timeout);
}

function hideDropdown() {
    timeout = setTimeout(function() {
        var dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.style.display = "none";
    }, 1000);
}

// Function to add Trusted Site JS
var script = document.createElement('script');
script.src = 'https://cdn.ywxi.net/js/1.js';
script.async = true;
document.head.appendChild(script);
