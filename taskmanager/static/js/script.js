document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    console.log("DOMContentLoaded event fired.");
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);
});