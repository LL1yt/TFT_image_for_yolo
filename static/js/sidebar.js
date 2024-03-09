const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})
searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});
document.querySelectorAll('.nav-link .arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        const subMenu = arrow.nextElementSibling;
        const navLink = arrow.parentElement.parentElement; // Получаем родительский элемент li
        navLink.classList.toggle('show'); // Переключаем класс .show для родительского элемента li
        arrow.classList.toggle('rotate');
    });
});