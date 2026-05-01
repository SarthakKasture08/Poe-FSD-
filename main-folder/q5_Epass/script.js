function validateForm() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let vehicle = document.getElementById("vehicle").value;
    let date = document.getElementById("date").value;

    // Empty check
    if (name == "" || phone == "" || email == "" || address == "" || source == "" || destination == "" || vehicle == "" || date == "") {
        alert("All fields are required");
        return false;
    }

    // Phone validation
    if (phone.length != 10 || isNaN(phone)) {
        alert("Enter valid phone number");
        return false;
    }

    // Email validation
    if (!email.includes("@")) {
        alert("Enter valid email");
        return false;
    }

    // Vehicle validation
    if (vehicle.length < 6) {
        alert("Enter valid vehicle number");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}