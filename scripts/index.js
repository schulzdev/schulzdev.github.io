const textWidth = 992;
function changeGithub() {
	document.getElementById("button-github").innerHTML = "GitHub";
}

function changeProjects() {
	document.getElementById("button-projects").innerHTML = "Projects";
}

function changeAboutMe() {
	document.getElementById("button-about-me").innerHTML = "About Me";
}

function changeTechno() {
	document.getElementById("button-techno").innerHTML = "Technologies";
}

function changeContactMe() {
	document.getElementById("button-contact-me").innerHTML = "Contact Me";
}

function changeWelcome() {
	document.getElementById("button-welcome").innerHTML = "Home";
}

function changeTiktok() {
	document.getElementById("button-tiktok").innerHTML = "Dedicated TikTok Page";
}

function changeYT() {
	document.getElementById("button-youtube").innerHTML = "YouTube";
}

function changeDiscord() {
	document.getElementById("button-discord").innerHTML = "My Discord";
}

function changeOld() {
	document.getElementById("old-web").innerHTML = "Old Website";
}

function changeGithubIcon() {
	if (window.innerWidth < textWidth) {
		document.getElementById("button-github").innerHTML =
			'<i class="fab fa-github"></i> GitHub';
	} else {
		document.getElementById("button-github").innerHTML =
			'<i class="fab fa-github"></i>';
	}
}

function changeProjectsIcon() {
	if (window.innerWidth < textWidth) {
		document.getElementById("button-projects").innerHTML =
			'<i class="fas fa-terminal"></i> Projects';
	} else {
		document.getElementById("button-projects").innerHTML =
			'<i class="fas fa-terminal"></i>';
	}
}

function changeWelcomeIcon() {
	if (window.innerWidth < textWidth) {
		document.getElementById("button-welcome").innerHTML =
			'<i class="fas fa-door-open"></i> Home';
	} else {
		document.getElementById("button-welcome").innerHTML =
			'<i class="fas fa-door-open"></i>';
	}
}

function changeAboutMeIcon() {
	if (window.innerWidth < textWidth) {
		document.getElementById("button-about-me").innerHTML =
			'<i class="fas fa-user"></i> About Me';
	} else {
		document.getElementById("button-about-me").innerHTML =
			'<i class="fas fa-user"></i>';
	}
}

function changeTechnoIcon() {
	if (window.innerWidth < textWidth) {
		document.getElementById("button-techno").innerHTML =
			'<i class="fas fa-memory"></i> Technologies';
	} else {
		document.getElementById("button-techno").innerHTML =
			'<i class="fas fa-memory"></i>';
	}
}

function changeTiktokIcon() {
	if (window.innerWidth < textWidth) {
		document.getElementById("button-tiktok").innerHTML =
			'<i class="fab fa-tiktok"></i> TikTok';
	} else {
		document.getElementById("button-tiktok").innerHTML =
			'<i class="fab fa-tiktok"></i>';
	}
}

function changeYTIcon() {
	if (window.innerWidth < textWidth) {
		document.getElementById("button-youtube").innerHTML =
			'<i class="fab fa-youtube"></i> YouTube';
	} else {
		document.getElementById("button-youtube").innerHTML =
			'<i class="fab fa-youtube"></i>';
	}
}

function changeDiscordIcon() {
	if (window.innerWidth < textWidth) {
		document.getElementById("button-discord").innerHTML =
			'<i class="fab fa-discord"></i> Discord';
	} else {
		document.getElementById("button-discord").innerHTML =
			'<i class="fab fa-discord"></i>';
	}
}

function changeOldIcon() {
	if (window.innerWidth < textWidth) {
		document.getElementById("old-web").innerHTML =
			'<i class="fas fa-history"></i> Old Website';
	} else {
		document.getElementById("old-web").innerHTML =
			'<i class="fas fa-history"></i>';
	}
}

function changeContactMeIcon() {
	if (window.innerWidth < textWidth) {
		document.getElementById("button-contact-me").innerHTML =
			'<i class="far fa-address-card"></i> Contact Me';
	} else {
		document.getElementById("button-contact-me").innerHTML =
			'<i class="far fa-address-card"></i>';
	}
}

changeGithubIcon();
changeProjectsIcon();
changeWelcomeIcon();
changeAboutMeIcon();
changeTiktokIcon();
changeDiscordIcon();
changeOldIcon();
changeContactMeIcon();
changeTechnoIcon();
changeYTIcon();
