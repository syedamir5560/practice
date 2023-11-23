let form = document.querySelector('#create-account-form')
let userInput = document.querySelector('#username')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let confirmpasswordInput = document.querySelector('#confirlm-password')

form.addEventListener('submit',(e)=>{
e.preventDefault()
validateForm()
})

cd