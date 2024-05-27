function displayUserData() {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const age = localStorage.getItem('age');
    const email = localStorage.getItem('email');

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Hello, ${firstName} ${lastName}, welcome to Pinky Promise! How's ${age} treating you?</p>
        <br>
        <br>
        <br>
        <p>Your Email Address: ${email}</p>
    `;
}

window.onload = function() {
    displayUserData();
}