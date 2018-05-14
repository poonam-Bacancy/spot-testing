FROM ruby:2.4-alpine

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.5/community' \
    >> /etc/apk/repositories

RUN apk add --no-cache \
    file \
    build-base \
    gcc \
    abuild \
    binutils \
    binutils-doc \
    gcc-doc \
    postgresql-dev \
    postgresql-contrib \
    postgresql-client \
    nodejs \
    less \
    imagemagick \
    graphicsmagick \
    libpng \
    jpeg \
    xvfb \
    ttf-freefont \
    fontconfig \
    dbus \
    bash

RUN apk add qt5-qtbase-dev \
            wkhtmltopdf \
            --no-cache \
            --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ \
            --allow-untrusted

RUN mv /usr/bin/wkhtmltopdf /usr/bin/wkhtmltopdf-origin && \
    echo $'#!/usr/bin/env sh\n\
    Xvfb :0 -screen 0 1024x768x24 -ac -dpi 72 +extension GLX +render -noreset & \n\
    DISPLAY=:0.0 wkhtmltopdf-origin $@ \n\
    killall Xvfb\
    ' > /usr/bin/wkhtmltopdf && \
    chmod +x /usr/bin/wkhtmltopdf

RUN echo "gem: --no-rdoc --no-ri" > ~/.gemrc
RUN npm install --global yarn
RUN yarn global add mjml@^3.0

WORKDIR /app

COPY Gemfile* ./
RUN bundle install --jobs 4
COPY . .
RUN bundle exec rake assets:precompile

EXPOSE 3000
CMD "./start.sh"
