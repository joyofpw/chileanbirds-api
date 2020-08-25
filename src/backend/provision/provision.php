<?php namespace ProcessWire;
// Bootstrap ProcessWire
require_once __DIR__ . "/../index.php";

function getData() {
  $files = wire("files");
  $data = $files->find(__DIR__ . "/birds", ["extensions" => ["json"]]);

  $jsons = [];

  foreach($data as $birdData) {
    $jsons[] = json_decode(file_get_contents($birdData));
  }
  return $jsons;
}

function createPages($jsons) {
  $langs = wire("languages");
  
  $english = $langs->get("en");
  $latin = $langs->get("la");

  $birds = wire("pages")->get("template=birds");
  foreach($jsons as $birdJson) {

    echo "Creating {$birdJson->uid}\n";
    
    $path = __DIR__ . "/birds/{$birdJson->uid}";

    $bird = new Page();
    $bird->template = "birds-item";
    $bird->parent = $birds;
    $bird->name = $birdJson->uid;
    $bird->save();

    $bird->uid = $birdJson->uid;
    $bird->title = $birdJson->names->spanish;
    $bird->title->setLanguageValue($english, $birdJson->names->english);
    $bird->title->setLanguageValue($latin, $birdJson->names->latin);

    $bird->habitat = $birdJson->habitat;
    $bird->body = $birdJson->description;
    $bird->didyouknow = $birdJson->didyouknow;

    $bird->order = $birdJson->info->order->value;
    $bird->size = $birdJson->info->size->value;
    $bird->species = $birdJson->info->species->value;

    $map = new Page();
    $map->template = "map-item";
    $map->parent = $bird;
    $map->save();

    $map->title = $birdJson->info->geo->value;
    $map->image = "{$path}/map.svg";
    $map->save();

    $bird->map->add($map);

    if(isset($birdJson->info->iucn->value)){
      $iucn = new Page();
      $iucn->template = "iucn-item";
      $iucn->parent = $bird;
      $iucn->save();

      $iucn->title = $birdJson->info->iucn->value;
      $iucn->body = $birdJson->iucn;

      $iucn->save();

      $bird->iucn->add($iucn);
    }

    $bird->dimorphism = $birdJson->info->dimorfism->value == "No" ? false : true;
    $bird->migration = $birdJson->info->migration->value == "No" ? false : true;

    if(isset($birdJson->audio->src)) {
      $audio = new Page();
      $audio->template = "audio-item";
      $audio->parent = $bird;
      $audio->save();

      $audio->title = $birdJson->audio->author;
      $audio->recording = "{$path}/{$birdJson->audio->filename}";

      $audio->save();

      $bird->audio->add($audio);
    }

    $bird->image = "{$path}/{$birdJson->image->filename}";

    foreach($birdJson->gallery as $birdImage) {
      $bird->images->add("{$path}/{$birdImage->filename}");
    }


    $bird->save();

    // Avoid Overloads
    usleep(10);

  }
}


function main() {
  $jsons = getData();
  createPages($jsons);
}

main();
