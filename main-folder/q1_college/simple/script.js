let images = [
"https://via.placeholder.com/600x200?text=Image1",
"https://via.placeholder.com/600x200?text=Image2",
"https://via.placeholder.com/600x200?text=Image3"
];

let i = 0;

setInterval(() => {
    document.getElementById("slider").src = images[i];
    i = (i + 1) % images.length;
}, 2000);