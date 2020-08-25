# Directory Paths
BACKEND = ./src/backend
FRONTEND = ./src/frontend
DATABASE = ./database
CONFIG = ./config
PW_CONTAINER = chileanbirds-api_pw_1

# Run the application
r run u up du docker-up b build:
	docker-compose up -d

# Provision the database with the sql
p provision:
	docker exec -it $(PW_CONTAINER) php /var/www/html/provision/restore.php
	
# Use this command to run the api and the frontend
i install:
	docker-compose up -d --build
	make provision

s stop:
	docker-compose down -v

# Install a brand new copy of ProcessWire
pw processwire:
	# Uncomment if you want to erase all the backend directory
	# rm -rf $(BACKEND)
	# Clone and remove clutter files
	rm -f $(BACKEND)/.gitkeep
	git clone git://github.com/processwire/processwire.git -b dev $(BACKEND)
	rm -rf $(BACKEND)/.git
	rm -f $(BACKEND)/.DS_Store
	rm -f $(BACKEND)/.gitattributes

react:
	rm -rf $(FRONTEND)/.gitkeep
	npx create-react-app $(FRONTEND)

# Warning: Will erase everything.
c clean:
	rm -rf $(BACKEND)
	mkdir -p $(BACKEND)
	touch $(BACKEND)/.gitkeep
	
	rm -rf $(FRONTEND)
	mkdir -p $(FRONTEND)
	touch $(FRONTEND)/.gitkeep

	rm -rf $(CONFIG)
	mkdir -p $(CONFIG)
	touch $(CONFIG)/.gitkeep

	rm -rf $(DATABASE)
	mkdir -p $(DATABASE)
	touch $(DATABASE)/.gitkeep

# Use this command to delete everything
# and start a new project
reset:
	make clean
	make react
	make processwire
