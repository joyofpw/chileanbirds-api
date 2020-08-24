CONTAINER = chileanbirds-api_pw_1

b backup:
	docker exec -it $(CONTAINER) php /var/www/html/provision/backup.php

r restore:
	docker exec -it $(CONTAINER) php /var/www/html/provision/restore.php

i install:
	git clone https://github.com/NinjasCL/chileanbirds-dataset
	rm -rf chileanbirds-dataset/.git
	rm -rf chileanbirds-dataset/data
	rm -rf chileanbirds-dataset/etl 
	rm -rf chileanbirds-dataset/.gitattributes
	rm -rf chileanbirds-dataset/.gitignore
	rm -rf chileanbirds-dataset/README.adoc
	rm -rf chileanbirds-dataset/LICENSE
	mv chileanbirds-dataset/assets birds
	rm -rf chileanbirds-dataset

p provision:
	docker exec -it $(CONTAINER) php /var/www/html/provision/provision.php
