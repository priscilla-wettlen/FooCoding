<?php
    $name = $_POST['name']; 
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'hej.priscilla.silva@gmail.com'; 
    $email_subject = "New Form Submission from Portfolio"; 
    $headers = "From: My Portfolio ".$mailFrom; 
    $email_body = "User Name: $name. \n". 
                  "User Email: $mailFrom. \n". 
                  "User Subject: $subject. \n". 
                  "User Message: $message. \n.";   

    $to = "hej.priscilla.silva@gmail.com"; 
    $headers = "From: $email_from \r\n"; 
    mail($to,$email_subject,$email_body,$headers); 
    header("Location:index.html"); 
?>