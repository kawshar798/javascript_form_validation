//Defaine variable
const form         = document.getElementById('form');
const username     = document.getElementById('username');
const email        = document.getElementById('email');
const password     = document.getElementById('password');
const confirm_pass = document.getElementById('confirm-password');

//Show input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;

}

//Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}

//Check email is valid
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}
//Check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

//check input Length
function checkLength(input,min,max){
    if(input.value.length <min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}


//Check passwors match
function matchPasswords(input1,input2){
 if(input1.value !== input2.value){
    showError(input2, 'Passwords do not match');
 }
}


 //Get field Name 
 function getFieldName(input){
return input.id.charAt(0).toUpperCase()+input.id.slice(1);
 }

//Event listeners
form.addEventListener('submit',function(e){
e.preventDefault();
//Check Rquried field
checkRequired([username,email,password,confirm_pass]);
checkLength(username,3,15);
checkLength(password,6,25);
checkEmail(email);
matchPasswords(password, confirm_pass);
});
