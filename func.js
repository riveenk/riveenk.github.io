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
