function validate() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    if (pass1.length < 8) {
        alert("The length of the first password is less than 8 characters")
    } else if (pass2.length < 8) {
        alert("The length of the second password is less than 8 characters")
    } else if (pass1 != pass2) {
        alert("Your two passwords don't match")
    } else {
        alert("Your passwords are valid")
    }
}
function change_paragraph() {
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var background_R = document.getElementById("background_R").value;
    var background_G = document.getElementById("background_G").value;
    var background_B = document.getElementById("background_B").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width
    tag.style.backgroundColor = `rgb(${background_R},${background_G},${background_B})`;
}
