function validateForm() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let age = document.getElementById("age").value;
    let year = document.getElementById("year").value;
    let branch = document.getElementById("branch").value;
    let org = document.getElementById("org").value;
    let designation = document.getElementById("designation").value;

    if (name=="" || phone=="" || address=="" || age=="" || year=="" || branch=="" || org=="" || designation=="") {
        alert("All fields are required");
        return false;
    }

    if (phone.length != 10 || isNaN(phone)) {
        alert("Invalid phone number");
        return false;
    }

    if (age < 18 || age > 100) {
        alert("Invalid age");
        return false;
    }

    if (year < 2000 || year > 2026) {
        alert("Invalid passout year");
        return false;
    }

    alert("Registration Successful");
    return true;
}