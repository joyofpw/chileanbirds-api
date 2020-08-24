<?php namespace ProcessWire;


class BirdListView {
  private $data = [];

  public function __construct($bird) {

    if(!$bird instanceof Page) {
      return;
    }

    $english = wire('languages')->get("en");
    $latin = wire('languages')->get("la");
    
    $this->data = (object) [
      "uid" => $bird->uid,
      "name" => (object) [
        "spanish" => $bird->title,
        "english" => $bird->getLanguageValue($english, "title"),
        "latin" => $bird->getLanguageValue($latin, "title")
      ],
      "images" => (object)[
        "main" => $bird->image->httpUrl()
      ],
      "_links" => (object) [
        "self" => $bird->httpUrl(),
        "parent" => $bird->parent->httpUrl()
      ],
      "sort" => $bird->sort
    ];

  }

  public function data() {
    return $this->data;
  }

  public function json() {
    return json_encode($this->data());
  }
}
