window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("Siden vises");

    document.querySelector("#burgermenu").addEventListener("click", mobileNav);


}


function mobileNav() {
    console.log("mobileNav");

    document.querySelector("#nav_mobile").classList.remove("hide");

    document.querySelector("#nav_mobile").classList.add("flex_end");

//    document.querySelector("#burgermenu").addEventListener("click", noNav);


}

//
//function noNav() {
//    console.log("noNav");
//
//    document.querySelector("#nav_mobile").classList.remove("flex_end");
//    document.querySelector("#nav_mobile").classList.add("hide");
//
//    document.querySelector("#burgermenu").addEventListener("click", mobileNav);
//
//}
