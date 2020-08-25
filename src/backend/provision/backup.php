<?php namespace ProcessWire;
// Bootstrap ProcessWire
require_once __DIR__ . "/../index.php";

// https://processwire.com/api/ref/wire-database-backup/

// determine where backups will go (should NOT be web accessible)
$backupPath = __DIR__;

// create a new WireDatabaseBackup instance
$backup = new WireDatabaseBackup($backupPath);

$backup->setDatabase(wire('config')->database);

$file = $backup->backup();
if($file) {
  echo "Backed up to: $file";
} else {
  echo "Backup failed: " . implode("<br>", $backup->errors());
}
