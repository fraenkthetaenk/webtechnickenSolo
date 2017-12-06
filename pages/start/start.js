/*
*Toggles the Navbar for the Mobile Layout
 */
toggleShowNav = () => {
    let navList = document.getElementsByClassName("inDropDown");
    for(let e = 0; e<navList.length; e++) {
        if (navList[e].classList.contains("show")) {
            navList[e].classList.remove("show");
        } else {
            navList[e].classList.add("show");
        }
    }
};