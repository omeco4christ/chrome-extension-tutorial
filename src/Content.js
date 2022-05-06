let willSmithImages = [
	"https://unsplash.com/photos/3Hsqx6BaQjQ",
	"https://unsplash.com/photos/G0xnuMTjVo4",
	"https://unsplash.com/photos/SmnnJ0wdE4U",
	"https://unsplash.com/photos/cTgemuRnkyw",
	"https://unsplash.com/photos/TVVKrBzslvw",
	"https://unsplash.com/photos/JrmZT18GXoE",
	"https://unsplash.com/photos/FycFlFuaYkc",
	"https://unsplash.com/photos/971rq8Vawl0",
];


const imgs = document.getElementsByTagName("img")

for (let i = 0; i < imgs.length; i++) {
	const randomImg = Math.floor(Math.random() * willSmithImages.length);
	imgs[i].src = willSmithImages[randomImg];
}

const headers = document.getElementsByTagName("h3")

for (let i = 0; i < headers.length; i++) {
	headers[i].innerText = "Awesome Coding!!!"
}