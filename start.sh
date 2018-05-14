#!/usr/bin/env bash

rm -f tmp/pids/server.pid || yes

rake db:create db:migrate
bundle exec sidekiq -q default -q mailers -c 5 -v -d -L log/sidekiq.log
# whenever --update-crontab
# crond
bundle exec rails server -b 0.0.0.0
