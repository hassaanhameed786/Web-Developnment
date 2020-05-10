//  leanring 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password02 = document.getElementById('password02');

//show  input error message 
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

// here input success message fun 

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}



function checkEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email not valid');
    }
}
// check password
function checkPassword(pass1, pass2) {
    if (pass1.value !== pass2.value) {
        showError(pass2, 'Passwords not mathc');

    }
}

//Check required field 
function CheckRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is requires`);

        } else {
            showSuccess(input);
        }

    });
}

// get  the fieldname 
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check length of the password & username

function CheckLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)}at least ${min} Characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)}less than ${max} Characters`);
    } else {
        showSuccess(input);
    }

}





// event Listner 
form.addEventListener('submit', function(e) {
    e.preventDefault();


    //console.log(username.value);

    CheckRequired([username, email, password, password02]);
    CheckLength(username, 3, 15);
    CheckLength(password, 6, 25);

    checkEmail(email);
})
