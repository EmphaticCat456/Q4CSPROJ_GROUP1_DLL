function handleFormSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('ema').value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('age', age);
    localStorage.setItem('email', email);

    window.location.href = 'homepage.html';
}

window.onload = function() {
    document.getElementById('login').addEventListener('submit', handleFormSubmit);
}