<!DOCTYPE html>
<html>
<body>

<h2>Simple Event Registration</h2>

<form method="post">

Name: <br>
<input type="text" name="name" required><br><br>

Title: <br>
<input type="text" name="title" required><br><br>

Company: <br>
<input type="text" name="company" required><br><br>

Email: <br>
<input type="email" name="email" required><br><br>

Phone Number: <br>
<input type="text" name="phone" required><br><br>

Are you an existing customer?<br>
<input type="radio" name="customer" value="Yes" required> Yes
<input type="radio" name="customer" value="No" required> No
<br><br>

<input type="submit" name="submit" value="Register">

</form>

<?php
include "connect.php";

if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $title = $_POST['title'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $customer = $_POST['customer'];

    $sql = "INSERT INTO users (name, title, company, email, phone, customer)
            VALUES ('$name','$title','$company','$email','$phone','$customer')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration Successful";
    } else {
        echo "Error";
    }
}
?>

</body>
</html>