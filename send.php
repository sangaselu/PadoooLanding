<?php

$fullname = $_POST["fullname"];
$email = $_POST["email"];
$kids = $_POST["kids"];
$phone = $_POST["phone"];

// PHP Data Objects(PDO) Sample Code:
try {
    $conn = new PDO("sqlsrv:server = tcp:padooowebserver.database.windows.net,1433; Database = padooowebdb", "javieresc97", ".jaaneses..1234");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "javieresc97@padooowebserver", "pwd" => ".jaaneses..1234", "Database" => "padooowebdb", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:padooowebserver.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);

$query = "INSERT INTO Email ([fullname], [email], [kids], [phone]) VALUES ('$fullname', '$email', $kids, '$phone')";
$result = sqlsrv_query($conn, $query);
if($result)
{
    echo json_encode("¡Excelente! Pronto serás uno de los primeros en tener Padooo.");
}
else
{
    echo json_encode("Hubo un error al enviar sus datos");
}

?>