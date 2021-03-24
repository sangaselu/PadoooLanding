<?php

$parentName = $_POST["parentName"];
$numberOfKids = $_POST["numberOfKids"];
$phoneNumber = $_POST["phoneNumber"];
$spendingRate = $_POST["spendingRate"];
$whatsapp = $_POST["whatsapp"];
$fbc = $_POST["fbc"];
$phoneCall = $_POST["phoneCall"];
$mail = $_POST["mail"];
$parentEmail = $_POST["parentEmail"];
$kidEmail = $_POST["kidEmail"];

// PHP Data Objects(PDO) Sample Code:
try {
    $conn = new PDO("sqlsrv:server = tcp:padooolandingserver.database.windows.net,1433; Database = LandingDatabase", "javieresc97", ".jaaneses..1234");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "javieresc97@padooolandingserver", "pwd" => ".jaaneses..1234", "Database" => "LandingDatabase", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:padooolandingserver.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);

$query = "INSERT INTO iOSForm (parentName, numberOfKids, phoneNumber, spendingRate, whatsapp, fbc, phoneCall, mail, parentEmail, kidEmail) VALUES('$parentName', $numberOfKids, '$phoneNumber', '$spendingRate', $whatsapp, $fbc, $phoneCall, $mail, '$parentEmail', '$kidEmail');";
$result = sqlsrv_query($conn, $query);
if($result)
{
    echo json_encode(true);
}
else
{
    echo json_encode(false);
}

?>