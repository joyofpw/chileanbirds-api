<?php namespace ProcessWire;
// Bootstrap ProcessWire
require_once __DIR__ . "/../index.php";

// https://processwire.com/api/ref/wire-database-backup/

// determine where backups will go (should NOT be web accessible)
$backupPath = __DIR__;

// create a new WireDatabaseBackup instance
$backup = new WireDatabaseBackup($backupPath);

$backup->setDatabase(wire('config')->database);

$files = wire("files");
$data = $files->find(__DIR__, ["extensions" => ["sql"]]);
$file = $data[0];

$success = $backup->restore($file);
if($success) {
  echo "Restored database from file: $file";
} else {
  echo "Restore failed: " . implode("<br>", $backup->errors());
}
