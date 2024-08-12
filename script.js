// QUESTION 1 //

// Set const for artist data (4 continents and 3 art forms)
const artists = {
	// Artists from Africa
	africa: {
		painting: {
			name: "Nengi Omuku",
			bio:
				"Nengi Omuku is a Nigerian contemporary artist known for her innovative use of materials and exploration of themes related to identity and cultural heritage.",
			image:
				"https://www.creativeboom.com/upload/articles/6b/6b4cd8effae43ee85604e7ae3f7a582b66d1b6c7_1888.jpg",
			year: 2002
		},

		sculpture: {
			name: "Leilah Babirye",
			bio:
				"Leilah Babirye is a Ugandan sculptor recognized for her powerful and provocative artworks that often address themes of queer identity, activism, and social justice within the context of contemporary African society.",
			image:
				"https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FHQCXmi6Mxaa8vVUxbZVT0g%2Fnormalized.jpg&width=450",
			year: 2001
		},

		photography: {
			name: "Atong Atem",
			bio:
				"Atong Atem is a South Sudanese-born Australian photographer celebrated for her vibrant and evocative portraits exploring themes of identity, migration, and cultural heritage.",
			image:
				"https://netsvictoria.org.au/wp-content/uploads/2021/07/Self-Portrait-on-Mercury-e1647966194852-629x445.jpg",
			year: 2018
		}
	},

	// Artists from Europe
	europe: {
		painting: {
			name: "Jadé Fadojutimi",
			bio:
				"Exploring a complex emotional landscape, Jadé Fadojutimi's paintings offer an insight into the artist's quest for identity and self-knowledge.",
			image:
				"https://gagosian.com/media/images/artists/jade-fadojutimi/cVIYFfq8Ci4K_585x329.jpg",
			year: 2021
		},

		sculpture: {
			name: "Niki de Saint Phalle",
			bio:
				"From the very outset of her career in the 1950s, Niki de Saint Phalle (American and French, 1930‒2002) defied artistic conventions, creating works that were overtly feminist, performative, collaborative, and monumental.",
			image:
				"https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1/auctions/UK010519/126_001.jpg",
			year: 1993
		},

		photography: {
			name: "Juno Calypso",
			bio:
				"Juno Calypso is a British photographer renowned for her captivating self-portraits, often staged in surreal, meticulously designed domestic settings, which explore themes of femininity, identity, and the tension between public appearance and private reality.",
			image:
				"https://artlogic-res.cloudinary.com/w_1200,h_630,c_fill,f_auto,fl_lossy,q_auto/ws-gutsgallery/usr/images/artists/group_images_override/items/be/be59b33bbec54324bfd7c71ce80729ce/seaweed_wrap_2015.jpg",
			year: 2017
		}
	},

	// Artists from America
	america: {
		painting: {
			name: "Frida Kahlo",
			bio:
				"Frida Kahlo was a Mexican painter known for her self-portraits and works inspired by Mexican culture.",
			image: "https://www.fridakahlo.org/assets/img/paintings/the-two-fridas.jpg",
			year: 1939
		},

		sculpture: {
			name: "Ruth Asawa",
			bio:
				"Ruth Aiko Asawa was an American modernist artist known primarily for her abstract looped-wire sculptures inspired by natural and organic forms.",
			image: "https://www.juxtapoz.com/media/k2/galleries/66402/Ruth-1.jpg",
			year: 1962
		},

		photography: {
			name: "Lee Miller",
			bio:
				"A war photographer who embedded with the US military to chronicle the harrowing events of World War II — and posed defiantly in Hitler’s bathtub on the day of his death.",
			image: "https://ychef.files.bbci.co.uk/624x351/p025z0q2.jpg",
			year: 1945
		}
	},

	// Artists from Asia
	asia: {
		painting: {
			name: "Amrita Sher-Gil",
			bio:
				"Amrita Sher-Gil was a Hungarian-Indian painter. She has been called one of the greatest avant-garde women artists of the early 20th century and a pioneer in modern Indian art.",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/c/c2/Amrita_Sger-Gil_Bride%27s_Toilet.jpg",
			year: 1937
		},

		sculpture: {
			name: "Yayoi Kusama",
			bio:
				"Yayoi Kusama is a Japanese artist celebrated for her mesmerizing installations and vibrant artworks, which often feature repetitive patterns and explore themes of infinity and interconnectedness.",
			image:
				"https://p.potaufeu.asahi.com/02df-p/picture/27127618/67a56ee91448717e905788177b870377.jpg",
			year: 1994
		},

		photography: {
			name: "Edith Amituanai",
			bio:
				"Edith Amituanai is a contemporary artist who is acclaimed for photographing her local Samoan and family community in Auckland where she was born.",
			image:
				"https://www.progear.co.nz/media/4106/hendoa4.png?width=957px&height=806px",
			year: 2011
		}
	}
};

// Get references to the HTML dropdowns and content tags on landing page
const continentSelector = document.getElementById("continentSearch");
const artFormSelector = document.getElementById("artFormSearch");
const h1Tag = document.getElementById("header");
const pTag = document.getElementById("info");
const imageTag = document.getElementById("imageArtGallery");

// Function to handle artist search
function searchArtist() {
	// Get the selected values from both dropdowns
	const selectedContinent = continentSelector.value;
	const selectedArtForm = artFormSelector.value;

	// Check which continent and art form have been selected
	if (selectedContinent && selectedArtForm) {
		// Get the artist from the array
		const selectedArtist = artists[selectedContinent][selectedArtForm];
		if (selectedArtist) {
			// Update the landing content tags with the artist content
			h1Tag.textContent = selectedArtist.name;
			pTag.textContent = selectedArtist.bio;
			imageTag.src = selectedArtist.image;
		} else {
			// If artist name is not found, display a message
			h1Tag.textContent = "Artist not found";
			pTag.textContent = "Try again!";
		}
	}
}

// Function to clear content
function clearContent() {
	// Reset the content to original landing content
	h1Tag.textContent = "Women Artists Around the World";
	pTag.textContent = "Choose a continent and an art form:";
	imageTag.src =
		"https://www.artnews.com/wp-content/uploads/2023/06/Tate-Britain-rehang-installation-view-2023-Tate-Madeleine-Buddo-14.jpeg?w=1200";

	// Reset the value of the number input element
	document.getElementById("yearInput").value = "";

	// Reset dropdowns
	continentSelector.selectedIndex = 0;
	artFormSelector.selectedIndex = 0;
}

// Add event listener to the search button
document.getElementById("searchBtn").addEventListener("click", searchArtist);

// Add event listener to the clear button
document.getElementById("clearBtn").addEventListener("click", clearContent);

// Get the guess button reference
const guessBtn = document.getElementById("guessBtn");

// Add event listener to the guess button
guessBtn.addEventListener("click", function () {
	// Get the selected values from both dropdowns
	const selectedContinent = continentSelector.value;
	const selectedArtForm = artFormSelector.value;

	// Check which continent and art form have been selected
	if (selectedContinent && selectedArtForm) {
		// Get the artist from the array
		const selectedArtist = artists[selectedContinent][selectedArtForm];
		if (selectedArtist) {
			// Find correct artwork year according to which artist has been selected
			const artworkYear = selectedArtist.year;

			// Get the inputted number from the input field
			const userGuess = parseFloat(document.getElementById("yearInput").value);

			// Calculate the difference between the inputted year and the stored year
			const difference = artworkYear - userGuess;

			if (userGuess === artworkYear) {
				alert(`Correct! 🎉 This artwork was made in ${artworkYear}.`);
			} else {
				alert(
					`So close! You were ${difference} years off 😊 This artwork was made in ${artworkYear}.`
				);
			}
		}
	}
});

// QUESTION 2 //

// 2.1
// Shift - removes an element from the beginning of an array
// Unshift - adds an element to the beginning of an array
// Split - splits a string into substrings and returns as an array
// Examples
const CFGdegree = [
	"Software Engineering",
	"Data",
	"Full-stack",
	"Product Management"
];

CFGdegree.shift();
console.log(CFGdegree);

CFGdegree.unshift("Software Engineering");
console.log(CFGdegree);

const str =
	"The CFG degree has four specialisations, which are Software Engineering, Data, Full-stack, Product Management";
const words = str.split(" ");
console.log(words[12]);

// 2.2
// Object methods - when a function is executed inside an object
// Example
let artistObject = {
	name: "Jadé Fadojutimi",
	bio:
		"Exploring a complex emotional landscape, Jadé Fadojutimi's paintings offer an insight into the artist's quest for identity and self-knowledge.",
	image:
		"https://gagosian.com/media/images/artists/jade-fadojutimi/cVIYFfq8Ci4K_585x329.jpg",
	year: 2021,
	sayHello: function () {
		console.log(artistObject.name + " is so cool!");
	}
};

artistObject.sayHello();

// 2.3
// onmouseover - DOM event that is triggered when the mouse pointer enters a HTML element
// Example
document.getElementById("header").onmouseover = function () {
	mouseOver();
};
function mouseOver() {
	document.getElementById("header").style.color = "darkcyan";
}

// onmouseout - DOM event that is triggered when the mouse pointer moves off a HTML element
// Example
document.getElementById("header").onmouseout = function () {
	mouseOut();
};
function mouseOut() {
	document.getElementById("header").style.color = "black";
}

// onclick - DOM event that is triggered when the mouse pointer clicks on a HTML element
// Example
// HTML
// <footer>
// 		<p id="hearts" onclick="emojis()">♥ Great Women Artists ♥</p>
// </footer>
function emojis() {
	const originalText = document.getElementById("hearts").textContent;
	const repeat = " 💗";
	let result = "";

	for (let i = 0; i < 3; i++) {
		setTimeout(function () {
			result += repeat;
			document.getElementById("hearts").textContent =
				result + " " + originalText + " " + result;
		}, (i + 1) * 1000);
	}
}
