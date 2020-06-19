window.addEventListener('load', function(){

const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const passwordcheck = document.getElementById('passwordcheck')
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const pwderrorElement = document.getElementById('pwderror');
const mailerrorElement = document.getElementById('mailerror');
const pwderror2Element = document.getElementById('pwderror2');

form.addEventListener('submit', (e) =>{
    let userMessages = []
    let pwdMessages = []
    let mailMessages = []
    let checkMessages = []

    // Insert message on array
    if (username.value === '' || username.value == null){
        userMessages.push('Name is required')
    } else{
        userMessages.pop()
    }

    if (password.value === '' || password.value == null){
        pwdMessages.push('Password is required')
    } else{
        pwdMessages.pop()
    }

    if (email.value === '' || email.value == null){
        mailMessages.push('E-mail is required')
    } else{
        mailMessages.pop()
    }

    if(passwordcheck.value != password.value){
        checkMessages.push('Password check must match')
    } else{
        checkMessages.pop()
    }

    //Show message on div
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

    if (mailMessages.length > 0){
        e.preventDefault()
        mailerrorElement.innerText = mailMessages.join(', ')
    } else {
        e.preventDefault()
        mailerrorElement.innerText = mailMessages.join(', ')
    }

    if (checkMessages.length > 0){
        e.preventDefault()
        pwderror2Element.innerText = checkMessages.join(', ')
    } else {
        e.preventDefault()
        pwderror2Element.innerText = checkMessages.join(', ')
    }
})})
