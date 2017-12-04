/*
Fills the Site with the Informatione of which user has registed him self just now after a form input was sent.
 */
window.onload = (ev => {
    let url = new URL(window.location);
    if (url.searchParams.get("prename") != null) {
        document.getElementById("spanPrename").innerText = url.searchParams.get("prename");
        document.getElementById("spanLastname").innerText = url.searchParams.get("lastname")
        document.getElementById("spanUsername").innerText = url.searchParams.get("username");
        document.getElementById("spanEmail").innerText = url.searchParams.get("email");
        document.getElementById("spanPassword").innerText = url.searchParams.get("password");
        document.getElementsByClassName("lasLogin-wrapper")[0].classList.add("show");
    }
})

let passsword = document.getElementById("passwordIn");

/*
Changes the Validation Message in the Password field, to reflect the requirements.
 */
passsword.addEventListener("input", function (event) {
    if (passsword.validity.patternMismatch) {
        passsword.setCustomValidity("The passweord needs to have at least 12 charchters \n 1 number \n 1 uppercase and 1 lowercase letter\n and one of these signs ?!=#+-_%§");
    } else {
        passsword.setCustomValidity("");
    }
});


/*
Adds an Event Listener to the password field, that Updates the color of the ekements of the requirment List,
 whenever an keyup-event is called.
 */
passsword.addEventListener("keyup", (event) => {
    let number = document.getElementById("pwNumberCheck");
    let lowerCase = document.getElementById("pwLowercaseCheck");
    let upperCase = document.getElementById("pwUppercaseCheck");
    let specialChar = document.getElementById("pwSpecialCharacterCheck");
    let length = document.getElementById("minLength");

    if (passsword.value.match(/[0-9]/)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else {
        number.classList.add("invalid");
        number.classList.remove("valid");
    }

    if (passsword.value.match(/[a-z]/)) {
        lowerCase.classList.remove("invalid");
        lowerCase.classList.add("valid");
    }
    else {
        lowerCase.classList.add("invalid");
        lowerCase.classList.remove("valid");
    }

    if (passsword.value.match(/[A-Z]/)) {
        upperCase.classList.remove("invalid");
        upperCase.classList.add("valid");
    }
    else {
        upperCase.classList.add("invalid");
        upperCase.classList.remove("valid");
    }

    if (passsword.value.match(/[?!=#+\-_%§]/)) {
        specialChar.classList.remove("invalid");
        specialChar.classList.add("valid");
    }
    else {
        specialChar.classList.add("invalid");
        specialChar.classList.remove("valid");
    }

    if (passsword.value.match(/.{12,}/)) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else {
        length.classList.add("invalid");
        length.classList.remove("valid");
    }

})

/*
*Toggles the Navbar for the Mobile Layout
 */
toggleShowNav = () => {
    let navList = document.getElementById("navList");
    if (navList.classList.contains("show")) {
        navList.classList.remove("show");
    } else {
        navList.classList.add("show");
    }
}



