const Toggel = () => {

    let mobilemenu = document.querySelector(".mobilemenu")



    if (mobilemenu.style.visibility === "hidden") {
        mobilemenu.style.visibility = "visible"
        mobilemenu.style.transform = " scale(1)"
    }
    else {
        mobilemenu.style.visibility = "hidden"
        mobilemenu.style.transform = " scale(0.1)"


    }



}
