<?php
$host = "localhost";
$dbname = "wampadmin";
$user = "root";
$pass = "";

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die("DB connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $action = $_POST['action'];

    if ($action === "register") {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $stmt = $conn->prepare("INSERT INTO users_register (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $password);
        if ($stmt->execute()) {
            echo "success";
        } else {
            echo "registration_failed";
        }

    } else if ($action === "login") {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Match from registered users
        $stmt = $conn->prepare("SELECT username, password FROM users_register WHERE username = ? AND password = ?");
        $stmt->bind_param("ss", $username, $password);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            // Optional: also insert into users_login table
            $stmt2 = $conn->prepare("INSERT INTO users_login (username, password) VALUES (?, ?)");
            $stmt2->bind_param("ss", $username, $password);
            $stmt2->execute();

            echo "login_success";
        } else {
            echo "login_failed";
        }
    }
}
?>
