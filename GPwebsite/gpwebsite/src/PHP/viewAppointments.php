header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


<?php
// Connect to the SQLite database
$db = new PDO('sqlite:C:\Users\user\Desktop\GPService\GPwebsite\gpwebsite\src\PHP\GPdatabase.db');

// Select all rows from the table
$query = "SELECT * FROM Appointments";
$rows = $db->query($query)->fetchAll(PDO::FETCH_ASSOC);

// Return the rows as JSON
header('Content-Type: application/json');
echo json_encode($rows);
?>
