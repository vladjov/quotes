// immediate invoked function expression

(function() {

	// Creating an array of quote objects with quote and author keys
	const quotes = [
		{
			quote: 
				"Some testing text.",
			author: "Life"
		},
		{
			quote: 
				"Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all.",
			author: "John Kenneth Galbraith"
		},
		{
			quote: "God save me from my friends. I can protect myself from my enemies.",
			author: "Claude Louis Hector de Villars"
		},
		{
			quote: "The price of anything is the amount of life you excange for it.",
			author: "David Thoreau"
		},
		{
			quote: "LIfe is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
			author: "Charles Lindbergh"
		},
		{
			quote: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
			author: "Tyne Daly"
		}
	];

	// Selecting the elements
	const btn = document.getElementById("generateBtn");
	const quote = document.getElementById("quote");
	const author = document.querySelector(".author");

	// Adding event listener on a button that listens to a click event
	btn.addEventListener("click", function() {
		// Getting random quote index
		let random = Math.floor(Math.random() * quotes.length);

		// Updating the DOM
		quote.textContent = quotes[random].quote;
		author.textContent = quotes[random].author;
	});
})();