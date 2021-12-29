<?php
if (empty($_POST['name']) || empty($_POST['phone']) || empty($_POST['email'])) exit(0);

$header = "Content-type: text/html; charset=utf-8 \r\n" . "From: info@roadstream.ru \r\n" . "Reply-To: info@roadstream.ru \r\n";
$to = 'sales@c-cars.tech';
$subject = 'Заявка на подключение ТС Daimler';

$message = 'На сайте roadstream.ru оставлена новая заявка на подключение. Свяжитесь с клиентом:<br>
Имя: ' . $_POST['name'] . '<br>
Контактный телефон: ' . $_POST['phone'] . '<br>
E-mail: ' . $_POST['email'];

mail($to, $subject, $message, $header);

echo 1;