<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $to = "info@helianthus-counselling.co.uk";
  $headers = "From: ".$mailFrom;
  $subject = "Website Enquiry";
  $txt = "You have received an email from ".$name.".\n\n".$message;

  mail($to, $subject, $txt, $headers) or die("Sorry, your message could not be sent. Please call 07508 401223 or try again later.");
  header("Location: index.html?");
}
