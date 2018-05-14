.PHONY: build build baked push bash db-restore psql help run
DEFAULT_GOAL: help
IMAGE_NAME = mycompany/myimage
REPO_VERSION ?= $(shell git rev-parse --short HEAD 2> /dev/null)
## Run dev stack
run:
	@docker-compose up

## Build dev docker images
build:
	@docker-compose build

## Spawn bash shell in web container
bash:
	@docker-compose run --rm web bash

## Spawn bash shell in web container
console:
	@docker-compose run --rm web rails c

## Run the test suite
test:
	@docker-compose run --rm web ./test.sh && open coverage/index.html

## Generates a test_pdf.pdf file with the CupcakeGenerator
test-pdf:
	@docker-compose run --rm web rails runner " \
		f = PrintedCupcakes::PDFGenerator.call( \
			cupcakes: [Cupcake.new(quantity: 48)] \
		); \
		FileUtils.mv(f.path, Rails.root.join('test_pdf.pdf')) \
		"

## Restore db from dump file
db-restore:
	@if [ ! -f appdb.sql ]; then \
		echo "Aborting! Can't find backup file. Database backup file must be named appdb.sql and located in the current directory!"; \
		exit 1; \
	fi
	@echo "Restoring database from backup file: appdb.sql"
	@cat appdb.sql | docker exec -i `docker-compose ps -q db` psql -Upostgres

## Dump db contents to appdb.sql
db-dump:
	@if [ -f appdb.sql ]; then \
		echo "Aborting! File appdb.sql already exists in the current directory and will be overwritten. Move it to continue."; \
		exit 1; \
	fi
	@if [ -z "$(DB_NAME)" ]; then \
		echo "Aborting! No database specified! Provide the name of the database to dump. e.g. 'make db-dump DB_NAME=project_name_dev'"; \
		exit 1; \
	fi
	@echo "Dumping database to backup file: appdb.sql"
	docker exec -i `docker-compose ps -q db` pg_dump -Upostgres -d$(DB_NAME) > appdb.sql

## Import data from staging
db-pull:
	@heroku pgbackups:capture && \
		curl "$(heroku pg:backups:url)" |\
		docker exec -i `docker-compose ps -q db` \
		pg_restore --verbose --clean --no-acl --no-owner -h localhost -d spotsnyc

## Run psql prompt
psql:
	@docker exec -it `docker-compose ps -q db` psql -Upostgres

## Show help screen.
help:
	@echo "Please use \`make <target>' where <target> is one of\n\n"
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "%-30s %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
