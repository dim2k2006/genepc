install:
	npm install

start:
	npx babel-node -- bin/genepc.js $(ean)

publish:
	npm publish --access public

lint:
	npx eslint .

test:
	npm test

.PHONY: test
