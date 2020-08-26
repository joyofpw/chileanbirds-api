<?php namespace ProcessWire;

wireIncludeFile("birds/BirdView.php");
wireIncludeFile("birds/BirdListView.php");

header("Content-Type: application/json");

// Set in root .htaccess. Uncomment if needed
// header('Access-Control-Allow-Origin: *');
