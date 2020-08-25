<?php namespace ProcessWire;

$item = new BirdView($page);

header("Content-Type: application/json");
echo $item->json();
