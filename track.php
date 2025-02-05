<?php
// Set cookies for last visited page and time
$page = basename($_SERVER['PHP_SELF']);
$time = date("Y-m-d H:i:s");

// Set cookies for 1 day
setcookie("last_page", $page, time() + 86400, "/");
setcookie("last_visit", $time, time() + 86400, "/");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-Time User Activity Tracker</title>
    <script src="script.js" defer></script> <!-- External JavaScript -->
</head>

<body>
    <h1>Welcome to <?= $page; ?></h1>
    <p id="activity">Loading user activity...</p>

    <a href="page1.php">Go to Page 1</a> |
    <a href="page2.php">Go to Page 2</a>
</body>

</html>