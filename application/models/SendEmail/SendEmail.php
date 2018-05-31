<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

 use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\Exception;

 
class SendEmail
{
    public static function Send($emailUser,$Message)
    {
        $result;

       

        include 'application/models/SendEmail/PHPMailer.php';
        include 'application/models/SendEmail/SMTP.php';
        $mail = new PHPMailer(true);
                                     // Passing `true` enables exceptions
        try {
            //Server settings
           // $mail->Debugoutput 
            $mail->Debugoutput='error_log';
            $mail->CharSet ='utf-8';
            $mail->SMTPDebug = 2;                                 // Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'wasteformone@gmail.com';                 // SMTP username
            $mail->Password = 'ajhvf1jn[jls';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to

            //Recipients
            $mail->setFrom('wasteformone@gmail.com', 'Form1 waste');
            $mail->addAddress($emailUser, $emailUser);     // Add a recipient
            //$mail->addAddress('ellen@example.com');               // Name is optional
           // $mail->addReplyTo('dzmi3y@gmail.com', 'Information');
           // $mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');

            //Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

            //Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Новый пароль';
            $mail->Body    = $Message;


            $mail->send();
            $result=true;
            //echo 'Message has been sent';
        } catch (Exception $e) {
            //echo 'Message could not be sent.';
            //echo 'Mailer Error: ' . $mail->ErrorInfo;
            $result=false;
        }

        return $result;
    }
}
?>