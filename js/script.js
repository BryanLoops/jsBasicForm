window.addEventListener('load', function(){

const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const pwderrorElement = document.getElementById('pwderror');


form.addEventListener('submit', (e) =>{
    let userMessages = []
    let pwdMessages = []

    // Insert message on array
    if (username.value === '' || username.value == null){
        userMessages.push('Username is required')
    } else{
        userMessages.pop()
    }

    if (password.value === '' || password.value == null){
        pwdMessages.push('Password is required')
    } else{
        pwdMessages.pop()
    }

    // Show message on div
    if (userMessages.length > 0){
        e.preventDefault()
        errorElement.innerText = userMessages.join(', ')
    } else {
        e.preventDefault()
        errorElement.innerText = userMessages.join(', ')
    }

    if (pwdMessages.length > 0){
        e.preventDefault()
        pwderrorElement.innerText = pwdMessages.join(', ')
    } else {
        e.preventDefault()
        pwderrorElement.innerText = pwdMessages.join(', ')
    }
})})
