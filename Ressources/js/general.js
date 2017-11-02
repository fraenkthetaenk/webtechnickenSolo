toggleShowNav = () => {
    navList = document.getElementById("navList");
    if(navList.classList.contains("show")){
        navList.classList.remove("show")
    }
    else {
        navList.classList.add("show")
    }
}