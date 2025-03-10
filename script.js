POS = -280;
window.addEventListener("scroll", () => {
    let ANGLE = window.scrollY / 10;
    rock.style.transform = "rotate(" + (ANGLE * -1) + "deg)";
    POS = ANGLE * 10;
});
