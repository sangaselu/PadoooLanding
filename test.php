<?php

$p1 = $_POST["p1"];
$p2 = $_POST["p2"];
$p3 = $_POST["p3"];
$p4 = $_POST["p4"];
$p5 = $_POST["p5"];

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

$query = "INSERT INTO Test VALUES ($p1, $p2, $p3, $p4, $p5)";
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