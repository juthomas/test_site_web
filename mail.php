<?php
if($_POST){
  $firstname = $_POST['firstname']
  $email = $_POST['email'];
  $lastname = $_POST['lastname'];
  $object = $_POST['objet'];
  $message = $_POST['message'];
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "From: $lastname $firstname <$email>\r\nReply-to : $lastname $firstname <$email>\nX-Mailer:PHP";
  $subject="Mon site";
  $destinataire="linx.le.vru@gmail.com";
  $body="$message";
  if(mail($destinataire,$subject,$body,$headers)) {
    $response['status'] = 'success';
    $response['msg'] = 'your mail is sent';
  } else {
    $response['status'] = 'error';
    $response['msg'] = 'Something went wrong';
  }
  echo json_encode($response);
}
?>