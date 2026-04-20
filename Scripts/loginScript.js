let wrongCount = 0;

function researchSubmit() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let wrong = document.getElementById("wrong")

    if (user.trim() != '' && pass.trim() != '') {
        location.href = "https://sites.google.com/view/area-79darhub/home"
    }
    else {
        wrongCount = wrongCount + 1
        wrong.style.visibility = "visible";
    }

    if (wrongCount == 3) {
        location.href = "https://awesomeness3301.github.io/accessdenied.github.io/"
    }
}