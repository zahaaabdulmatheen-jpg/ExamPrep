let menuOpen = false;

function toggleMenu() {

    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");

    if(menuOpen === false){

        sidebar.style.left = "0";
        menuBtn.innerHTML = "✕";
        menuOpen = true;

    }
    else{

        sidebar.style.left = "-300px";
        menuBtn.innerHTML = "☰";
        menuOpen = false;

    }

}
