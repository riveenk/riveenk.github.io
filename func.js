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
