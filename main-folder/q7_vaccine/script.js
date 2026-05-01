function validateForm() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let age = document.getElementById("age").value;
    let aadhaar = document.getElementById("aadhaar").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    // Empty check
    if (name == "" || phone == "" || address == "" || age == "" || aadhaar == "" || gender == null) {
        alert("All fields are required");
        return false;
    }

    // Phone validation
    if (phone.length != 10 || isNaN(phone)) {
        alert("Enter valid mobile number");
        return false;
    }

    // Age validation
    if (age < 1 || age > 120) {
        alert("Enter valid age");
        return false;
    }

    // Aadhaar validation (12 digits)
    if (aadhaar.length != 12 || isNaN(aadhaar)) {
        alert("Enter valid Aadhaar number");
        return false;
    }

    alert("Registration Successful");
    return true;
}