  <?php
  $success = false;
  $name_error = $email_error = $message_error = '';

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate name field
    if (!preg_match('/^[a-zA-Z\s]+$/', $name)) {
      $name_error = 'Only alphabetic characters are allowed';
    }

    // Validate email field
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $email_error = 'Invalid email format';
    }

    // Validate message field
    if (empty($message)) {
      $message_error = 'Message field is required';
    }

    // If there are no errors, process and send the email
    if (empty($name_error) && empty($email_error) && empty($message_error)) {
      // Process and send email

      // Assuming the email is sent successfully
      $success = true;
    }
  }
?>