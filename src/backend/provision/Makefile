CONTAINER = chileanbirds-api_pw_1

b backup:
	docker exec -it $(CONTAINER) php /var/www/html/provision/backup.php

r restore:
	docker exec -it $(CONTAINER) php /var/www/html/provision/restore.php

p provision:
	docker exec -it $(CONTAINER) php /var/www/html/provision/provision.php

i install:
	git clone https://github.com/NinjasCL/chileanbirds-dataset
	mv chileanbirds-dataset/assets birds
	rm -rf chileanbirds-dataset
	make provision
