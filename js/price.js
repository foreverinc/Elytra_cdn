// JavaScript code
const selectElement = document.getElementById("currency");

const proLite = document.getElementById("proLite");
const proI = document.getElementById("proI");
const proMax = document.getElementById("proMax");
const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]');
const Continue = document.getElementById("continue");
const First = document.getElementById("first")
let price = document.getElementById('setPrice');
let package = document.getElementById("setPackage");
let p_name = document.getElementById("p_name");
let rate = document.getElementById('rate');
const UgEx = 3800;
const SkEx = 10.33;
const USDm1 = 30;
const USDm2 = 60;
const USDm3 = 160;
const USDy1 = 288;
const USDy2 = 576;
const USDy3 = 1536;

// Function to update prices
function updatePrices() {
	const selectedValue = selectElement.value;
	const selectedRadio = document.querySelector(
		'input[name="flexRadioDefault"]:checked'
	).value;
	if (selectedRadio === "month" && selectedValue === "USD") {
		proLite.innerText = `$${USDm1}`;
		proI.innerText = `$${USDm2}`;
		proMax.innerText = `$${USDm3}`;
	} else if (selectedRadio === "month" && selectedValue === "SEK") {
		proLite.innerText = `${(SkEx * USDm1).toFixed(2)} SEK*`;
		proI.innerText = `${(SkEx * USDm2).toFixed(2)} SEK*`;
		proMax.innerText = `${(SkEx * USDm3).toFixed(2)} SEK*`;
	} else if (selectedRadio === "month" && selectedValue === "UGX") {
		proLite.innerText = `${(UgEx * USDm1)} UGX*`;
		proI.innerText = `${(UgEx * USDm2)} UGX*`;
		proMax.innerText = `${(UgEx * USDm3)} UGX*`;
	} else if (selectedRadio === "year" && selectedValue === "USD") {
		proLite.innerText = `$${USDy1}`;
		proI.innerText = `$${USDy2}`;
		proMax.innerText = `$${USDy3}`;
	} else if (selectedRadio === "year" && selectedValue === "SEK") {
		proLite.innerText = `${(SkEx * USDy1).toFixed(2)} SEK*`;
		proI.innerText = `${(SkEx * USDy2).toFixed(2)} SEK*`;
		proMax.innerText = `${(SkEx * USDy3).toFixed(2)} SEK*`;
	} else if (selectedRadio === "year" && selectedValue === "UGX") {
		proLite.innerText = `${(UgEx * USDy1)} UGX*`;
		proI.innerText = `${(UgEx * USDy2)} UGX*`;
		proMax.innerText = `${(UgEx * USDy3)} UGX*`;
	}
}

// Add an event listener to the select input
selectElement.addEventListener("change", (event) => {
	// Log the updated value to the console
	
	// Update the prices
	updatePrices();
});

// Add event listeners to each radio button
radioButtons.forEach(function (radio) {
	radio.addEventListener("change", function () {
		// Log the updated value to the console
		

		// Update the prices
		updatePrices();
	});
});

// Update the prices initially
updatePrices();



function proLiteBtn() {
	Continue.classList.remove("d-none");
	First.classList.add("d-none");
	price.value = proLite.innerText;
	package.value = "Pro Lite";
	
}
function proIBtn() {
	Continue.classList.remove("d-none");
	First.classList.add("d-none");
	price.value = proI.innerText;
	package.value = "Pro I";
	
}

function proMaxBtn() {
	Continue.classList.remove("d-none");
	First.classList.add("d-none");
	price.value = proMax.innerText;
	package.value = "Pro Max";
	
}
