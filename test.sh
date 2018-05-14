#!/usr/bin/env bash

RAILS_ENV=test

rake db:create db:migrate

if [ -z "$VERBOSE" ]; then \
  bundle exec rspec --format documentation
else
  bundle exec rspec
fi
