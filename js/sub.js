const toggleButton = document.getElementById('toggle-button');
const navList = document.getElementById('navi-list');
const switchBtn = document.getElementById('switch_button');
const switchTxt = document.getElementById('switch_text');


const navbar = document.getElementById('navbar');


const listitem1 = document.getElementById('list-item1');
const listitem2 = document.getElementById('list-item2');
const listitem3 = document.getElementById('list-item3');
const listitem4 = document.getElementById('list-item4');

const title1 = document.getElementById('title1');

const text1 = document.getElementById('text1');

const con1 = document.getElementById('con1');


const icon = document.getElementById('icon');


toggleButton.addEventListener('click', () => {
	console.log("clicked");
	navList.classList.toggle('active');
})

switchBtn.addEventListener('click', () => {

	if (switchTxt.innerHTML == "Dark")
	{
		switchTxt.innerHTML = "Light";
		console.log("its light mode");
		navbar.style.backgroundColor = "black";

		listitem1.style.color = "white";
		listitem2.style.color = "white";
		listitem3.style.color = "white";
		listitem4.style.color = "white";



		switchTxt.style.color = "white";

		con1.style.backgroundColor = "black";


		title1.style.color = "white";


		text1.style.color = "white";


		icon.src = "images/logo-white.svg";

		switchBtn.style.backgroundColor = "black";

	}
	else {
		switchTxt.innerHTML = "Dark";
		navbar.style.backgroundColor = "white";
		navList.style.color = "white";

		listitem1.style.color = "black";
		listitem2.style.color = "black";
		listitem3.style.color = "black";
		listitem4.style.color = "black";


		switchTxt.style.color = "black";

		con1.style.backgroundColor = "white";


		title1.style.color = "black";


		text1.style.color = "black";


		icon.src = "images/logo-black.svg";

		switchBtn.style.backgroundColor = "white";

	}

})

