const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    input();
    
      
    
});
function input(){
    const firstName = fname.value.trim();
    const lastName = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstName === '') {
		errorFunc(fname, 'Username cannot be blank');
	} else {
		successFunc(fname);
	}
	
	if(lastName === '') {
		errorFunc(lname, 'Last name cannot be blank');
	}
     else {
		successFunc(lname);
	}
	
	if(emailValue === '') {
		errorFunc(email, 'Email cannot be blank');
		document.getElementsByName('email')[0].placeholder="Ex: email@gmail.com";  //to display error email if it is empty. calling the input field by 'name'
	} else {
		successFunc(email);
	}
	

	if(passwordValue === '') {
		errorFunc(password, 'Password cannot be blank');
	} else {
		successFunc(password);
	}


}
// function errorFunc(req, message) {
// 	const formControl = req.parentElement;
// 	const span = formControl.querySelector('span');
// 	formControl.className = 'error';
// 	span.innerText = message;
// }
function errorFunc(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    input.className = 'form-control error';
    small.innerText = message;
  
}

function successFunc(req){
    req.className = 'success';
}