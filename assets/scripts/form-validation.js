// Not in use yet

var fields = {};

document.addEventListener("DOMContentLoaded", () => {
    fields.name = document.getElementById('name');
    fields.org = document.getElementById('org');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
});

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return value.length > 0;
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function validate(field, validation) {
    if (field == null) return false;

    let isValid = validation(field.value);
    if (!isValid) {
        field.className += ' info-red';
    }

    return isValid;
}

function success() {
    var valid = true;

    valid &= validate(fields.name, isNotEmpty);
    valid &= validate(fields.org, isNotEmpty);
    valid &= validate(fields.email, isNotEmpty);
    valid &= validate(fields.email, isEmail);
    valid &= validate(fields.message, isNotEmpty);

    return valid;
}

function send() {
    if (success()) {
        let con = new Contact(fields.name, fields.org, fields.email, fields.message);
        console.log('Success');
    } else {
        console.error('Error');
    }
}

class Contact {
    constructor(name, org, email,message) {
        this.name = name;
        this.org = org;
        this.email = email;
        this.message = message;
    }
}
