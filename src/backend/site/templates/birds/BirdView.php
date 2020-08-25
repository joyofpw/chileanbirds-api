<?php namespace ProcessWire;


class BirdView {
  private $data = [];

  public function __construct($bird) {

    if(!$bird instanceof Page) {
      return;
    }

    $english = wire('languages')->get("en");
    $latin = wire('languages')->get("la");

    $map = $bird->map[0];
    
    $this->data = (object) [
      "uid" => $bird->uid,
      "name" => (object) [
        "spanish" => $bird->title,
        "english" => $bird->getLanguageValue($english, "title"),
        "latin" => $bird->getLanguageValue($latin, "title")
      ],
      "map" => (object) [
        "image" => $map->image->httpUrl(),
        "title" => $map->title
      ],
      "iucn" => (object) [],
      "habitat" => $bird->habitat,
      "didyouknow" => $bird->didyouknow,
      "migration" => (bool) $bird->migration,
      "dimorphism" => (bool) $bird->dimorphism,
      "size" => $bird->size,
      "order" => $bird->order,
      "species" => $bird->species,
      "images" => (object)[
        "main" => $bird->image->httpUrl(),
        "gallery" => []
      ],
      "audio" => (object)[],
      "_links" => (object) [
        "self" => $bird->httpUrl(),
        "parent" => $bird->parent->httpUrl()
      ],
      "sort" => $bird->sort
    ];

    $audio = $bird->audio[0];
    if(isset($audio->title) && $audio->title != "") {
      $this->data->audio = (object) [
        "author" => $audio->title,
        "file" => $audio->recording->httpUrl()
      ];
    }

    $iucn = $bird->iucn[0];
    if(isset($iucn->title) && $iucn->title != "") {
      $this->data->iucn = (object) [
        "title" => $iucn->title,
        "description" => $iucn->body
      ];
    }

    $images = $bird->images;
    foreach($images as $image) {
      $this->data->images->gallery[] = (object)[
        "url" => $image->httpUrl()
      ];
    }
  }

  public function data() {
    return $this->data;
  }

  public function json() {
    return json_encode($this->data());
  }
}
