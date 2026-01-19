<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit();
}

$name = htmlspecialchars($data['name']);
$mobile = htmlspecialchars($data['mobile']);
$city = htmlspecialchars($data['city']);
$specialty = htmlspecialchars($data['specialty']);
$clinic = htmlspecialchars($data['clinic']);

$to = "jaydeep@epsilon-technology.com";
$subject = "New Lead: $name - Doctor Growth Consultation";

$message = "
<html>
<head>
<title>New Booking Request</title>
</head>
<body>
<h2>New Booking Request</h2>
<p><strong>Name:</strong> $name</p>
<p><strong>Mobile:</strong> $mobile</p>
<p><strong>City:</strong> $city</p>
<p><strong>Specialty:</strong> $specialty</p>
<p><strong>Clinic:</strong> $clinic</p>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: no-reply@epsilon-technology.com" . "\r\n";

if(mail($to, $subject, $message, $headers)) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send email"]);
}
?>
