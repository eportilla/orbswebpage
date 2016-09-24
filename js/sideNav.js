function openLeftnav() {
	document.getElementById("open-left-menu").style.width = "0";
	document.getElementById("sideNavleft").style.width = "20%";
}

function closeLeftnav() {
	document.getElementById("sideNavleft").style.width = "0";
  document.getElementById("open-left-menu").style.width = "20%";
}

function openRightnav() {
	document.getElementById("open-right-menu").style.width = "0";
  document.getElementById("sideNavright").style.width = "20%";
}

function closeRightnav() {
  document.getElementById("sideNavright").style.width = "0";
  document.getElementById("open-right-menu").style.width = "20%";
}