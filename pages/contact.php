<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars(trim($_POST["name"]));
    $email   = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to = "tiedejustin1@gmail.com";
    $subject = "New Contact Form Message";
    $body = "You received a message from:\n\nName: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail(to: $to, subject: $subject, message: $body, additional_headers: $headers)) {
        echo "<p>Thank you, $name, for your message!</p>";
    } else {
        echo "<p>Sorry, something went wrong. Please try again later.</p>";
    }
} else {
    echo "<p>Invalid request.</p>";
}
?>