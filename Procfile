web: rake db:migrate && bundle exec rails s -b 0.0.0.0 -p $PORT
worker: bundle exec sidekiq -q default -q mailers -c 5 -v
