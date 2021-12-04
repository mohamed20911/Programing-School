<?php
$sname = 'root';
$unmae = "login";
$password = "";

$db_name = "login form";

$conn = mysqli_connect($sname, $unmae, $password, $db_name);

if (!$conn) {
          echo "Connection Failed!";
}