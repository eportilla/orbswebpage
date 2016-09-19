function openNav() {
    document.getElementById("sideNavLeft").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
    document.getElementById("collapsebtn").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("sideNavLeft").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("collapsebtn").style.visibility = "visible";
}