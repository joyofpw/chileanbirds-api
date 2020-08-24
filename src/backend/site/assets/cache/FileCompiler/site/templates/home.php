<?php

 include(\ProcessWire\wire('files')->compile(\ProcessWire\wire("config")->paths->root . "site/templates/basic-page.php",array('includes'=>true,'namespace'=>true,'modules'=>true,'skipIfNamespace'=>true))); 
