<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';


if(empty(trim($_POST['message']))){
    echo "Message cannot be empty";
}elseif(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
    echo "Invalid Email";
}else{

    $to = "momonji74@gmail.com";
    $headers = "From: $_POST[email]";
    $subject = "Message from Mongi Website";
    $message = "
    Name: $_POST[name] \r\n 
    Email: $_POST[email] \r\n 
    Message: $_POST[message] \r\n
    ";
    try{
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth =true;
        $mail->Username = 'muhammadmongi@gmail.com';
        $mail->Password = 'ddvlilgojhepmjnx';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = '465';
    
        $mail->setFrom($_POST['email']);
        $mail->addAddress('muhammadmongi@gmail.com');
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;
    
        $mail->send();
        $response['success'] = true; 
        echo json_encode($response);
    
    }
    catch (Exception $e) {
        // display an error message
        echo 'Message could not be sent. Error: ', $mail->ErrorInfo;
    }
    
    
}




?>
