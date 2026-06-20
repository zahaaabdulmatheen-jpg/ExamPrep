let menuOpen = false;

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");

    if (menuOpen === false) {
        sidebar.style.left = "0";
        menuOpen = true;
    } else {
        sidebar.style.left = "-300px";
        menuOpen = false;
    }
}
