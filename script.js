POS = 0;
window.addEventListener("scroll", () => {
    let ANGLE = window.scrollY / 10;
    rock.style.transform = "rotate(" + (-1 * ANGLE) + "deg)";
});
