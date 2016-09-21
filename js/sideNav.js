function openLeftnav() {
    document.getElementById("sideNavleft").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
    document.getElementById("collapseLeftbtn").style.visibility = "hidden";
}

function closeLeftnav() {
    document.getElementById("sideNavleft").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("collapseLeftbtn").style.visibility = "visible";
}

function openRightnav() {
    document.getElementById("sideNavright").style.width = "20%";
    document.getElementById("main").style.marginRight = "20%";
    document.getElementById("collapseRightbtn").style.visibility = "hidden";
}

function closeRightnav() {
    document.getElementById("sideNavright").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.getElementById("collapseRightbtn").style.visibility = "visible";
}