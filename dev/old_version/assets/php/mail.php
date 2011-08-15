<?php
$sendTo = "jabari.bell@pxlflu.net";

$senderName = $_POST["senderName"];
$replyAddress = $_POST["replyAddress"];
$subject = $_POST["subject"];
$messageBody = $_POST["messageBody"];

$headers = "From: " . $senderName . " <" . $replyAddress . ">\r\n";

mail($sendTo, $subject, $messageBody, $headers);

?>