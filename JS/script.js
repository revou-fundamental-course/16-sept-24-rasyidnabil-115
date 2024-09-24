// ini JawaScript
// prompt(message, defaultValue)
// let, var, const

// changeUsername Greeting
function replaceUsername() {
    let username = prompt("Konnichiwa, can u type ur name? :)", "");
    document.getElementById("username").innerHTML = username
}

replaceUsername();

document.getElementById("changeUsername").addEventListener("click", function() {
    replaceUsername();
})

function validateForm () {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    if (name == "" || birhtDate == "" || gender == "" || message == "") {
        alert("Tidak boleh ada yang")
    }

    setSenderUI(name, birthDate, gender, message);

    return false;
}

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}