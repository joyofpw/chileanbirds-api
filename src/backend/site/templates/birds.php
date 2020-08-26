<?php namespace ProcessWire;

$birds = $page->children();
$out = [];

foreach($birds as $bird) {
  $item = new BirdListView($bird);
  $out[] = $item->data();
}

echo json_encode($out);
