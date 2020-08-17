# Directory Paths
BACKEND = ./src/backend
FRONTEND = ./src/frontend
DATABASE = ./database
CONFIG = ./config

r run up dcu docker-up:
	docker-compose up -d

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

i install:
	make react
	make processwire 
