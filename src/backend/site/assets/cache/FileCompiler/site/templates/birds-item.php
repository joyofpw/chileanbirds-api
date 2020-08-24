<?php namespace ProcessWire;

$item = new BirdView($page);
$out = $item->data();

header("Content-Type: application/json");
echo json_encode($out);
