<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $name    = htmlspecialchars(trim($_POST["name"]));
    $email   = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p>Invalid email address.</p>";
        exit;
    }

    // Recipient and subject
    $to = "tiedejustin1@gmail.com";
    $subject = "New Contact Form Message";

    // Email body
    $body = "You received a new message from your website contact form:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // Your verified domain email address
    $fromEmail = "info@nikiszeug.de"; // <-- Use a real domain email here!

    // Proper headers
    $headers = "From: $fromEmail\r\n";        // Must be your real domain email
    $headers .= "Reply-To: $email\r\n";       // This allows you to reply to the user
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Thank you, $name. Your message has been sent!</p>";
    } else {
        echo "<p>Sorry, something went wrong. Please try again later.</p>";
    }
} else {
    echo "<p>Invalid request method.</p>";
}
?>
