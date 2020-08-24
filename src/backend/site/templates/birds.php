<?php namespace ProcessWire;

$birds = $page->children();
$out = [];

foreach($birds as $bird) {
  $item = new BirdView($bird);
  $out[] = $item->data();
}

header("Content-Type: application/json");
echo json_encode($out);
