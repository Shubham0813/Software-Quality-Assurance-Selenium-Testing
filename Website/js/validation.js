window.onload = function() {
  	new WOW().init();
	validateSellingForm();
};

function validateSellingForm() {

	var form = document.getElementById("sellingForm");

	if (form == null)
		return;

	form.addEventListener('submit',function(e) {
		e.preventDefault();

		var nameOk = validateName(getValue("form1"));
		var addressOk = validateAddress(getValue("form2"));
		var cityOk = validateCity(getValue("form3"));
		var phoneNumberOk = validatePhoneNumber(getValue("form4"));
		var emailIDOk = validateEmail(getValue("form5"));
		var vehicleOk = validateVehicleInfo(getValue("form6"));
	
		//if(nameOk && addressOk && cityOk && phoneNumberOk && emailIDOk && vehicleOk) {
			saveFormData();
		//}
	});
}

function validateName(name) {
	var regExpName = new RegExp("^[a-zA-Z ]{2,}$");

	if(!regExpName.test(name.trim())) {
		setValueOf("form1Error", "Name must consist of only alphabets and be of minimum 2 characters");
		return false;
	}

	setValueOf("form1Error", "");
	return true;
}

function validateAddress(address) {
	var regExpAddress = new RegExp("^[0-9]{0,}, [0-9]{0,} [a-zA-Z ]{5,}$");

	if(!regExpAddress.test(address.trim())) {
		setValueOf("form2Error", "Address must be of the form 'Unit/Apt. Number, Street Number, Street Name'");
		return false;
	}

	setValueOf("form2Error", "");
	return true;
}

function validateCity(city) {
	var regExpCity = new RegExp("^[a-zA-Z]+$");

	if(!regExpCity.test(city.trim())) {
		setValueOf("form3Error", "Please enter correct city name");
		return false;
	}

	setValueOf("form3Error", "");
	return true;
}

function validatePhoneNumber(city) {
	var regExpNumber1 = new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{4}$");
	var regExpNumber2 = new RegExp("^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$");
	
	if(!regExpNumber1.test(city.trim())) {
		if(!regExpNumber2.test(city.trim()))
		setValueOf("form4Error", "Please enter number in correct format: 123-123-1234 or (123) 123-1234");
		return false;
	}

	setValueOf("form4Error", "");
	return true;
}


function validateEmail(email) {
	
	var regExpEmail = new RegExp('(([^<>()\\[\\]\\.,;:\s@"]+(\\.[^<>()\\[\\]\\.,;:\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

	if(!regExpEmail.test(email)) {
		setValueOf("form5Error", "Please enter correct Email ID");
		return false;
	}

	setValueOf("form5Error", "");
	return true;
}


function validateVehicleInfo(vehicleInfo) {
    
    var regExpVehicleInfo = new RegExp("^(1|2)[0-9]{3} [a-zA-Z]+ [a-zA-Z]+$");

    if (!regExpVehicleInfo.test(vehicleInfo)) {
		setValueOf("form6Error", "Please enter Vehicle info in correct format (Year Make Model)");
        return false;
    }

	setValueOf("form6Error", "");
   	return true;
}

function getValue(elementId) {
	return getElement(elementId).value;
}

function getElement(elementId) {

	var element = document.getElementById(elementId);
	
	if (element == null) {
		alert("There's been an error while loading the page: " + elementId);
		throw new ElementNotFoundException(elementId);
	}

	return element;
}

function setValueOf(elementId, content) {
	var element = getElement(elementId);
	element.innerHTML = content;
}

function saveFormData() {
	var xmlhttp = new XMLHttpRequest();	
	
	var name = getValue("form1");
	var address = getValue("form2");
	var city = getValue("form3");
	var phoneNumber = getValue("form4");
	var emailID = getValue("form5");

	var vehicleInfo = getValue("form6").split(" ");

	var year =  vehicleInfo[0];
	var make = vehicleInfo[1];
	var model = vehicleInfo[2];

	var values = "name="+ name + "&address=" + address + "&city=" + city + "&phoneNumber=" + phoneNumber +
					"&emailID=" + emailID + "&year=" + year + "&make=" + make + "&model=" + model;
	
	xmlhttp.open("POST", "db/savePosting.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = function() {
	    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	if(xmlhttp.responseText == 1) {
	    		var url = "http://www.jdpower.com/cars/" + make + "/" + model + "/" + year;
				var urlDiv = getElement("url-jd");
				urlDiv.innerHTML = "Ad posted successfully" + "\n" + 
									"<a target='_blank' href=" + url + ">" + url + " </a>";
	    	
				urlDiv.style.display = 'block';
			} else {
	    		alert("Error: Cannot generate URL");
	    	}
	    }
	}
	xmlhttp.send(values);
}