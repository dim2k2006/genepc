install:
	npm install

start:
	npx babel-node --extensions ".ts" -- bin/genepc.ts $(ean)

publish:
	npm publish

lint:
	npx eslint .

test:
	npm test

.PHONY: test
