// ini JawaScript
// prompt(message, defaultValue)
// let, var, const

// changeUsername Greeting
function replaceUsername() {
    let username = prompt("Konnichiwa, can u type ur name? :)", "");
    console.log(name);
    document.getElementById("username").innerHTML = username
}

replaceUsername();

document.getElementById("changeUsername").addEventListener("click", function() {
    replaceUsername();
})

// Form validating
function validateForm () {
    let inputName = document.getElementById('input-name').value;
    if (inputName == "") {
        alert("Empry Form! Please Input Your Identity");
    } else {
        document.getElementById("result-form").innerHTML = inputName;
        alert("Succes Submit Form");
    }
}