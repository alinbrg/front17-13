const btn = document.querySelector(".btn");

const colors = [
	"blue",
	"black",
	"purple",
	"darkblue",
	"darkgreen",
	"orange",
	"#880e4f",
	"#bf360c",
	"#004d40",
	"#263238",
];

btn.addEventListener("click", () => {
	const randomColor = colors[Math.floor(Math.random() * 10)];
	btn.style.backgroundColor = randomColor;
	btn.innerText = "background-color: " + randomColor;
	// console.log(randomColor)
});
