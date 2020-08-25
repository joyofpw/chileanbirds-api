@echo off
set PW_CONTAINER=chileanbirds-api_pw_1

if /i "%1"=="install" goto install
if /i "%1"=="i" goto install
if /i "%1"=="run" goto run
if /i "%1"=="r" goto run
if /i "%1"=="stop" goto stop
if /i "%1"=="s" goto stop

goto install

:run
  start /wait /B docker-compose up -d
  goto :eof

:install
  start /wait /B docker-compose up -d --build
  start /wait /B docker exec -it %PW_CONTAINER% php /var/www/html/provision/restore.php
  goto :eof

:stop
  start /wait /B docker-compose down -v
  goto :eof
