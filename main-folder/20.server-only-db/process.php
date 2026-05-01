<?php

include "connect.php";

// Get form data
$firstname = $_POST['firstname'];
$lastname  = $_POST['lastname'];
$email     = $_POST['email'];
$phone     = $_POST['phone'];
$address   = $_POST['address'];
$city      = $_POST['city'];
$state     = $_POST['state'];

// Insert query
$sql = "INSERT INTO users1 (firstname, lastname, email, phone, address, city, state)
        VALUES ('$firstname', '$lastname', '$email', '$phone', '$address', '$city', '$state')";

if ($conn->query($sql) === TRUE) {
    echo "Data stored successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();

?>