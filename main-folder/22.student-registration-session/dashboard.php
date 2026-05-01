<?php
session_start();

if (!isset($_SESSION['name'])) {
    header("Location: index.php");
}
?>

<h2>Welcome</h2>

Name: <?php echo $_SESSION['name']; ?><br>
Email: <?php echo $_SESSION['email']; ?><br><br>

<a href="logout.php">Logout</a>