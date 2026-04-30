<?php
session_start();
?>

<!DOCTYPE html>
<html>
<body>

<h2>Student Details</h2>

Name: <?php echo $_SESSION['name']; ?><br>
Email: <?php echo $_SESSION['email']; ?><br>

<br>
<a href="logout.php">Logout</a>

</body>
</html>