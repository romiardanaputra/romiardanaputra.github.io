var users = localStorage.getItem('romidb');
$(function () {
	users = JSON.parse(users); // Convert String as an Object
	if (users === null)
		// If there is nothing intialize
		users = [];
});

function formValidation() {
	// Get the HTML elements
	var firstname = document.registration.firstName;
	var middleName = document.registration.middleName;
	var lastName = document.registration.lastName;
	var email = document.registration.email;

	if (isValidUserName(firstname, 1, 6))
		if (isValidMiddleName(middleName, 1, 9))
			if (isValidlastName(lastName, 1, 9))
				if (isValidEmail(email)) {
					var user = JSON.stringify({
						firstName: $('#firstName').val(),
						middleName: $('#middleName').val(),
						lastName: $('#lastName').val(),
						gender: $('#gender').val(),
						email: $('#email').val(),
						password: $('#pwd').val(),
						course: $('#course').val(),
					});

					users.push(user);
					localStorage.setItem('romidb', JSON.stringify(users));
					return true;
				}

	return false;
}
// to prevent user input lastname over the maxlen and les than minlen
function isValidUserName(userName, minLen, maxLen) {
	var userNameLength = userName.value.length;
	if (userNameLength == 0 || userNameLength > maxLen || userNameLength < minLen) {
		// || - Or operator
		alert('First Name should not be empty / length must be between ' + minLen + ' to ' + maxLen);
		userName.focus();
		return false;
	} else if (!isAlpha(userName)) {
		//! - Not operator
		alert('Enter alphabets only');
		userName.focus();
		return false;
	}
	return true;
}
// to prevent user input lastname over the maxlen and les than minlen
function isValidMiddleName(middleName, minlen, maxlen) {
	var middleNameLength = middleName.value.length;
	if (middleNameLength == 0 || middleNameLength < minlen || middleName > maxlen) {
		alert(`Middle Name should not be empty or length must be between ${minlen} to ${maxlen}`);
		middleName.focus();
		return false;
	} else if (!isAlpha(middleName)) {
		alert(`do not enter anything except alphabets`);
		middleName.focus();
		return false;
	}
	return true;
}
// to prevent user input lastname over the maxlen and les than minlen
function isValidlastName(lastName, minlen, maxlen) {
	var lastNameLength = lastName.value.length;
	if (lastNameLength == 0 || lastNameLength < minlen || lastName > maxlen) {
		alert(`last Name should not be empty or length must be between ${minlen} to ${maxlen}`);
		lastName.focus();
		return false;
	} else if (!isAlpha(lastName)) {
		alert(`do not enter anything except alphabets`);
		lastName.focus();
		return false;
	}
	return true;
}

// to prevent user insert weird symbol while inputing email
function isValidEmail(email) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value.match(mailformat)) {
		return true;
	} else {
		alert('Enter valid email address!');
		email.focus();
		return false;
	}
}

// function isValidContact(contact, len) {
// 	var contactLength = contact.value.length;
// 	if (contactLength == 0 || contactLength != len) {
// 		alert('Contact should not be empty / length must be ' + len);
// 		contact.focus();
// 		return false;
// 	} else if (!isNumber(contact)) {
// 		alert('Enter Numbers only');
// 		contact.focus();
// 		return false;
// 	}
// 	return true;
// }

// function isValidAddress(address, minLen, maxLen) {
// 	var addressLength = address.value.length;
// 	if (addressLength == 0 || addressLength > maxLen || addressLength < minLen) {
// 		alert('Address should not be empty / length be between ' + minLen + ' to ' + maxLen);
// 		address.focus();
// 		return false;
// 	} else if (!isAddress(address)) {
// 		alert('Enter alphabets and numbers only');
// 		address.focus();
// 		return false;
// 	}
// 	return true;
// }

// only alphabets only can be accepted ini this funcntion
function isAlpha(input) {
	var characters = /^[A-Za-z]+$/; // Regular Expression [ ] - Options , A-Z - A,B, C ... Z, ^ - Any
	if (input.value.match(characters)) {
		return true;
	}
	return false;
}

// only number can be accepted in this function
function isNumber(input) {
	var characters = /^[0-9{8}]+$/;
	if (input.value.match(characters)) {
		return true;
	}
	return false;
}

// only number and alphabets can be accepted in this function
function isAlphaNumeric(input) {
	var characters = /^[0-9A-Za-z]+$/;
	if (input.value.match(characters)) {
		return true;
	}
	return false;
}

// special for address
function isAddress(input) {
	var characters = /^[#.0-9a-zA-Z\s,-]+$/;
	if (input.value.match(characters)) {
		return true;
	}
	return false;
}

function nextLocation(){
	$(".nextLocation").on("click", function(){
		window.location = "../coursedetail.html";
	})
}
