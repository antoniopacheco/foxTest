<?php
$json = file_get_contents("https://www.foxnotes.com/sfiles/restsamples.nsf/employees?readform");
$data = json_decode($json, true);
header('Content-Type: application/json');
echo json_encode($data);
?>