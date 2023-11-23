let form = document.querySelector('#create-account-form');
let usernameInput = document.querySelector('#username')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let confirmpasswordInput = document.querySelector('#confirm-password')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(565);
    validateForm()


})

function validateForm() {

    // Username
    if (usernameInput.value.trim() == '') {
        setError(usernameInput, 'Username Cannot Be Blank', 'p1')
    } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
        setError(usernameInput, 'Username Cannot Be Less than 5 or more than 15 letters', 'p1')
    } else {
        setSuccess(usernameInput)
    }
    // Email
    if (emailInput.value.trim() == '') {
        setError(emailInput, 'email Cannot Be Blank', 'p2')
    } else if (isValidEmail(emailInput.value) == false) {
        setError(emailInput, 'Invalid Email', 'p2')
    } else {
        setSuccess(emailInput)

    }

    //Password
    if (passwordInput.value.trim() == '') {
        setError(passwordInput, 'Password Cannot Be Blank', 'p3')
    } else if (passwordInput.value.trim().length < 8 || passwordInput.value.trim().length > 20) {
        setError(passwordInput, 'Password Cannot Be Less than 8 or more than 20 characters', 'p3')
    } else if (isvalidpass(passwordInput.value) == false) {
        setError(passwordInput, 'Password should include lowercase, uppercase, special characters', 'p3')
    }
    else {
        setSuccess(passwordInput)
    }

    //conferm-password
    if (confirmpasswordInput.value.trim() == '') {
        setError(confirmpasswordInput, 'Password Cannot Be Blank', 'p4')
    } else if (confirmpasswordInput.value.localeCompare(passwordInput.value, { sensitivity: "base" })) {
        setError(confirmpasswordInput, 'Password does not match', 'p4')

    }
    else {
        setSuccess(confirmpasswordInput)
    }
}


function setError(element, msg, ptag) {
    let parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success')
    }
    parent.classList.add('error')
    let paragraph = document.querySelector(`.${ptag}`)
    paragraph.textContent = msg
}

function setSuccess(element) {
    let parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error')
    }
    parent.classList.add('success')
}

function isValidEmail(para) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // console.log(reg.test(para));
    return reg.test(para)
}

function isvalidpass(para) {
    let reg = /^[a-zA-Z0-9!@#$%^&*]{8,20}$/
    return reg.test(para)
}
