function scrollToElement(target) {
    console.log('scrolling to section with id ' + target);
    var element = document.getElementById(target);
    element.scrollIntoView({ behavior: "smooth" });
    flashElement(target);

}
function flashElement(elementId) {
    console.log('\tflashing section with id ' + elementId);
    const element = document.getElementById(elementId);
    element.classList.add('flash');
    setTimeout(() => {
        element.classList.remove('flash');
    }, 1000);
}
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {

    }, 1000);
});
