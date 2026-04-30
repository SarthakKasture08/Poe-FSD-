// IMAGE SLIDER
let picIndex = 0;

let images = [
    "https://images.unsplash.com/photo-1562774053-701939374585",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
];

function showSlide() {
    document.getElementById("slideImage").src = images[picIndex];
}

function nextSlide() {
    picIndex++;
    if (picIndex >= images.length) {
        picIndex = 0;
    }
    showSlide();
}

function prevSlide() {
    picIndex--;
    if (picIndex < 0) {
        picIndex = images.length - 1;
    }
    showSlide();
}

// FORM VALIDATION
function validateForm() {
    let nameVal = document.getElementById("userName").value;
    let emailVal = document.getElementById("userEmail").value;
    let msgVal = document.getElementById("userMsg").value;

    if (nameVal == "" || emailVal == "" || msgVal == "") {
        alert("All fields are required!");
        return false;
    }

    if (!emailVal.includes("@")) {
        alert("Invalid email!");
        return false;
    }

    return true;
}
function toggleMenu() {
    let menu = document.getElementById("deptMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
window.onclick = function(event) {
    if (!event.target.matches('button')) {
        let menu = document.getElementById("deptMenu");
        if (menu) {
            menu.style.display = "none";
        }
    }
}   

// INITIAL IMAGE
showSlide();