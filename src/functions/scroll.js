export function toHome() {
    var element = document.getElementById("Home").offsetTop;
    // console.log(element)
    window.scrollTo(0, element - 120);
}

export function toPortal() {
    var element = document.getElementById("Portal").offsetTop;
    // console.log(element)
    window.scrollTo(0, element - 120);
}

export function toAbout() {
    var element = document.getElementById("About").offsetTop;
    // console.log(element)
    window.scrollTo(0, element - 120);
}