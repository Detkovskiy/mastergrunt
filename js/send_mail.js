function sendMail(){
  var name = $("#name-contact_page").val();
  var phone = $("#tel-contact_page").val();
  var email = $("#email-contact_page").val();
  var text = $("#message-contact_page").val();
  var capcha = $("#capcha").val();
  var error = $("#error-result").val();

  if (name == '') {
    $("#error-result").html("<span class='error-text'>Заполните поле - Имя</span>");
    error = setTimeout(function errorCapcha(){$("#error-result").html("");}, 3000);
  } else
  if (phone == '') {
    $("#error-result").html("<span class='error-text'>Заполните поле - Телефон</span>");
    error = setTimeout(function errorCapcha() {$("#error-result").html("");}, 3000);
  }

  else if (text == '') {
    $("#error-result").html("<span class='error-text'>Заполните поле - Сообщение</span>");
    error = setTimeout(function errorCapcha() {$("#error-result").html("");}, 3000);
  }

  else {
    if (capcha == 4) {
      $.post(
        "js/mail_sender.php",
        {
          name: name,
          phone: phone,
          email: email,
          message: text,
          capcha: capcha
        },
        onSendComplete
      );
    }
    else {
      errorCapcha();
    }
  }
}

function errorCapcha() {
  $("#error-result").html("<span class='error-text'>Проверьте КАПЧУ</span>");
  setTimeout(function errorCapcha() {$("#error-result").html("");}, 3000);
}

function onSendComplete(data)
{
  $("#name-contact_page").val('');
  $("#tel-contact_page").val('');
  $("#email-contact_page").val('');
  $("#message-contact_page").val('');
  $("#capcha").val('');
  $("#error-result").val('');
  $("#send-result").html("<span class='success-text'>Сообщение отправлено!</span>");
}


//----------
function sendMailBanner(){
var name = $("#name-contact_page").val();
var phone = $("#tel-contact_page").val();
var email = $("#email-contact_page").val();
var text = $("#message-contact_page").val();
var error = $("#error-result--banner").val();


if (name == '') {
  $("#error-result--banner").html("<span class='error-text--banner'>Заполните поле - Имя</span>");
  error = setTimeout(function errorCapcha(){$("#error-result--banner").html("");}, 3000);
} else
if (phone == '') {
  $("#error-result--banner").html("<span class='error-text--banner'>Заполните поле - Телефон</span>");
  error = setTimeout(function errorCapcha() {$("#error-result--banner").html("");}, 3000);
}

else if (text == '') {
  $("#error-result--banner").html("<span class='error-text--banner'>Заполните поле - Сообщение</span>");
  //error = setTimeout(function errorCapcha() {$("#error-result--banner").html("");}, 3000);
}

else {
    $.post(
      "js/mail_sender.php",
      {
        name: name,
        phone: phone,
        email: email,
        message: text
      },
      onSendComplete_banner
    );
  }
}

var success = $("#send-result--banner").val();

function onSendComplete_banner(data) {
  $("#name-contact_page").val('');
  $("#tel-contact_page").val('');
  $("#email-contact_page").val('');
  $("#message-contact_page").val('');
  $("#send-result--banner").html("<span class='success-text--banner'>Сообщение отправлено!</span>");
  success = setTimeout(function success() {$("#send-result--banner").html("");}, 3000);
}

//-----------------
function sendMailPage(){

  var name = $("#order-name").val();
  var phone = $("#order-tel").val();
  var text = $("#option-value").val();
  var error = $("#error-result--order").val();


  if (name == '') {
    $("#error-result--order").html("<span class='error-text--order'>Заполните поле - Имя</span>");
    error = setTimeout(function errorCapcha(){$("#error-result--order").html("");}, 3000);
  } else
  if (phone == '') {
    $("#error-result--order").html("<span class='error-text--order'>Заполните поле - Телефон</span>");
    error = setTimeout(function errorCapcha() {$("#error-result--order").html("");}, 3000);
  }

  else if (text == '') {
    $("#error-result--order").html("<span class='error-text--order'>Заполните поле - Сообщение</span>");
    error = setTimeout(function errorCapcha() {$("#error-result--order").html("");}, 3000);
  }

  else {
    $.post(
      "js/mail_sender.php",
      {
        name: name,
        phone: phone,
        message: text
      },
      onSendComplete_page
    );
  }
}

var successs = $("#send-result--order").val();

function onSendComplete_page(data) {
  $("#order-name").val('');
  $("#order-tel").val('');
  $("#send-result--order").html("<span class='success-text--order'>Сообщение отправлено!</span>");
  successs = setTimeout(function successs() {$("#send-result--order").html("");}, 3000);
}



//-----------------
function sendMailWork(){

  var name = $("#order-name_work").val();
  var phone = $("#order-tel_work").val();
  var text = $("#option-value_work").val();
  var error = $("#error-result--work").val();


  if (name == '') {
    $("#error-result--work").html("<span class='error-text--work'>Заполните поле - Имя</span>");
    error = setTimeout(function errorCapcha(){$("#error-result--work").html("");}, 3000);
  } else
  if (phone == '') {
    $("#error-result--work").html("<span class='error-text--work'>Заполните поле - Телефон</span>");
    error = setTimeout(function errorCapcha() {$("#error-result--work").html("");}, 3000);
  }

  else if (text == '') {
    $("#error-result--work").html("<span class='error-text--work'>Заполните поле - Сообщение</span>");
    error = setTimeout(function errorCapcha() {$("#error-result--work").html("");}, 3000);
  }

  else {
    $.post(
      "js/mail_sender.php",
      {
        name: name,
        phone: phone,
        message: text
      },
      onSendComplete_work
    );
  }
}

var successss = $("#send-result--work").val();

function onSendComplete_work(data) {
  $("#order-name_work").val('');
  $("#order-tel_work").val('');
  $("#send-result--work").html("<span class='success-text--work'>Сообщение отправлено!</span>");
  successss = setTimeout(function successss() {$("#send-result--work").html("");}, 3000);
}
