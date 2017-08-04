window.onload = function() {
  	new WOW().init();
	validateLoginForm();
	validateRegistrationForm();
	validateAddTransactionForm();
};

function getElement(elementId) {

	var element = document.getElementById(elementId);
	
	if (element == null) {
		alert("There's been an error while loading the page: " + elementId);
		throw new ElementNotFoundException(elementId);
	}

	return element;
}

function getValue(elementId) {
	return getElement(elementId).value;
}

function setValueOf(elementId, content) {
	var element = getElement(elementId);
	element.innerHTML = content;
}

function validateLoginForm() {
	
	var form = document.getElementById("loginForm");

	if (form == null)
		return;

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		var usernameOk = validateUsername(getValue("loginUsername"));
		var passwordOk = validatePassword(getValue("loginPassword"));

		if (usernameOk && passwordOk)
			location.href="dashboard.html";
	});
}

function validateUsername(username) {
	var regExpUsername = new RegExp("^.{5,}$");

	if(!regExpUsername.test(username.trim())) {
		setValueOf("usernameError", "Username must be at least 5 characters.");
		return false;
	}

	setValueOf("usernameError", "");
	return true;
}

function validatePassword(password) {
	var regExpPassword = new RegExp("^.{4,}$");

	if(!regExpPassword.test(password.trim())) {
		setValueOf("passwordError", "Password must be at least 4 characters.");
		return false;
	}

	setValueOf("passwordError", "");
	return true;
}

function validateRegistrationForm() {

	var form = document.getElementById("registrationForm");

	if (form == null)
		return;

	form.addEventListener('submit',function(e) {
		e.preventDefault();


		var emailIDOk = validateEmail(getValue("emailID"));
		var usernameOk = validateSignupUsername(getValue("signupUsername"));
		var firstNameOk = validateFirstName(getValue("firstName"));
		var lastNameOk = validateLastName(getValue("lastName"));
		var signUpPasswordOk = validateSignupPassword(getValue("signupPassword"));
		var confirmPasswordOk = validateConfirmPassword(getValue("confirmPassword"));

		if(emailIDOk && usernameOk && firstNameOk && lastNameOk && signUpPasswordOk && confirmPasswordOk) {
			alert("Success");
		}
	});
}

function validateEmail(email) {
	
	var regExpEmail = new RegExp('(([^<>()\\[\\]\\.,;:\s@"]+(\\.[^<>()\\[\\]\\.,;:\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

	if(!regExpEmail.test(email)) {
		setValueOf("emailError", "Please enter correct Email ID");
		return false;
	}

	setValueOf("emailError", "");
	return true;
}

function validateSignupUsername(username) {

	var regExpUsername = new RegExp("^[A-z0-9_\\- ]{5,}$");

	if(!regExpUsername.test(username.trim())) {
		setValueOf("signupUsernameError", "Username must be of minimum 5 characters and can include A-z, 0-9, _, - and spaces(no comma)");
		return false;
	}

	setValueOf("signupUsernameError", "");
	return true;
}

function validateFirstName(firstName) {
	
	var regExpFirstName = new RegExp("^[A-Z][a-z0-9 ]+$");

	if(!regExpFirstName.test(firstName)) {
		setValueOf("firstNameError", "First name can consist of only A-z, 0-9 and spaces. It should start with first letter capital and rest must be lowercase");
		return false;
	}

	setValueOf("firstNameError", "");
	return true;
}

function validateLastName(lastName) {
	
	var regExpLastName = new RegExp("^[A-Z][a-z0-9]+$");

	if(!regExpLastName.test(lastName)) {
		setValueOf("lastNameError", "Last name can consist of only A-z, 0-9 and spaces." +
		 "It should start with first letter capital and rest must be lowercase");
		return false;
	}

	setValueOf("lastNameError", "");
	return true;
}

function validateSignupPassword(password) {
	
	var regExpPassword = new RegExp("(.){4,}");

	if(!regExpPassword.test(password.trim())) {
		setValueOf("signupPasswordError", "Password must be minimum 4 characters long");
		return false;
	}

	setValueOf("signupPasswordError", "");
	return true;
}

function validateConfirmPassword(confirmPassword) {
	
	var password = getValue("signupPassword");

	if(confirmPassword !== password.trim()) {
		setValueOf("confirmPasswordError", "Passwords do not match");
		return false;	
	}

	setValueOf("confirmPasswordError", "");	
	return true;
}

function validateAddTransactionForm() {
	var form = document.getElementById("addTransactionForm");

	if (form == null)
		return;

	form.addEventListener('submit',function(e) {
		e.preventDefault();

		var inputDateOk = validateDate(getValue("inputDate"));
		var descriptionOk = validateDescription(getValue("inputDescription"));
		var valueOk = validateValue(getValue("inputValue"));
			
		if(inputDateOk && descriptionOk && valueOk) {
			alert("Success");
		}
	 });
}

function validateDate(dateValue) {
    
    var regDate = new RegExp("^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$");

    if (!regDate.test(dateValue)) {
		setValueOf("dateError", "Please enter the Date (in correct format)");
        return false;
    }

	setValueOf("dateError", "");
   	return true;
}

function validateDescription(description) {
	
	var regDescription = new RegExp("^[A-Za-z0-9_\\- ]{10,}$");
	
	if(!regDescription.test(description)) {
		setValueOf("descriptionError", "Minimum 10 characters and can only include characters,numbers,spaces,-,_");
		return false;
	}

	setValueOf("descriptionError", "");
	return true;
}

function validateValue(inputValue) {
	
	var regValue = new RegExp("^[+,-]\\.?[0-9]+(\\.[0-9]+)?$");

	if(!regValue.test(inputValue)) {
		setValueOf("valueError", "Amount requires +/- prefix.");
		return false;
	}

	var amount = 0;
	
	try {
		var amount = Number.parseFloat(inputValue.substr(1)).toFixed(2);	
	} catch(e) {
		setValueOf("valueError", "Invalid amount.");
		return false;
	}

	if(amount > 10000){
		setValueOf("valueError", "Amount exceeds +/- 10,000.00");
		return false;
	}

	setValueOf("valueError", "");
	return true;
}