document.querySelector('#signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.querySelector('#username').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').