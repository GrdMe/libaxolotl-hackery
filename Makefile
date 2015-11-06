all:
	browserify src/entry.js > dist/bundle.js

install:
	npm install

clean:
	rm dist/*
