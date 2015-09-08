.PHONY: all bootstrap static

all: bootstrap static

bootstrap: package.json
	npm install

static:
	npm run bundle
