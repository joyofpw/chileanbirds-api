
# Install a brand new copy of ProcessWire
pw processwire:
	# Uncomment if you want to erase all the backend directory
	# rm -rf ./backend
	git clone git://github.com/processwire/processwire.git -b dev ./backend
	rm -rf ./backend/.git
	rm -f ./backend/.gitkeep
	rm -f ./backend/.DS_Store
	rm -f ./backend/.gitattributes
