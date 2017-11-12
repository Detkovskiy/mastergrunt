<?php

	$message = ''; // тут будет сообщение, которое отправится по почте

	// проверим поле "Имя"
	if (isset($_POST['name'])){
   $message = '' . 'Имя клиента: ' . $_POST['name']; // если есть "Имя" - добавим к сообщению
	} else {
	 $message = '';
	}

  // проверим поле "Телефонв"
  if (isset($_POST['phone'])){
    $message .= "\n". 'Телефон: ' . $_POST['phone'];
  } else {
    $message .= "\n";
  }

	// проверим поле "Емэйл"
	if (isset($_POST['email'])){
   $message .= "\n". 'Почта: ' . $_POST['email'];
	} else {
	 $message .= "\n";
	}

	// проверим поле "Сообщение"
	if (isset($_POST['message'])){
   $message .= "\n". 'Сообщение: ' . $_POST['message'];
	} else {
	 $message .= "\n";
	}

  // На случай если какая-то строка письма длиннее 70 символов используем wordwrap()
  $message = wordwrap($message, 70);

	$send_to = 'mastergrunt@mail.ru';  // кому отправить
  $subject = 'Заявка с сайта Mastergrunt';	// тема

	// дополнительные данные
	$headers = array();
  $headers[] = "MIME-Version: 1.0";
  $headers[] = "From: mastergrunt.ru <order@mastergrunt.ru>";   // oт кого
	$headers[] = "Content-type: text/plain; charset=\"utf-8\"";

  // Отправляем
  mail($send_to, $subject, $message, implode("\r\n", $headers));

?>
