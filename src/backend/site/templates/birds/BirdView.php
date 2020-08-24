<?php namespace ProcessWire;


class BirdView {
  private $data;

  public function __construct($bird) {
    $english = wire('languages')->get("en");
    $latin = wire('languages')->get("la");

    $this->data = (object) [
      "uid" => $bird->uid,
      "name" => (object) [
        "spanish" => $bird->title,
        "english" => $bird->getLanguageValue($english, "title"),
        "latin" => $bird->getLanguageValue($latin, "title")
      ],
      "_links" => (object) [
        "self" => $bird->httpUrl()
      ]
    ];
  }

  public function data() {
    return $this->data;
  }

  public function json() {
    return json_encode($this->data());
  }
}
