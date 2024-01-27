var txt;

function preload() {
    txt = loadStrings("ingredientslist.txt");
}

function setup() {
    console.log(txt);
}

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var correctUsername = "emily";
    var correctPassword = "emily123"

    if(username==correctUsername && password==correctPassword) {
        window.location.replace("mainMenu.html")
        return false;
    }
    else {
        alert("Login failed");
    }
}
