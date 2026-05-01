<?php
$conn = new mysqli("localhost", "root", "", "DB");

if ($conn->connect_error) {
    die("Connection failed");
}
?>