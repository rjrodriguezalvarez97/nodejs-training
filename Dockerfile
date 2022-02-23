FROM node:16.14.0-alpine3.14


# ARG BUNDLE_GEM__FURY__IO

#ENV RUBY_VERSION=3.1.0
#ENV BUNDLE_SILENCE_ROOT_WARNING=1

RUN mkdir /usr/local/jtservice \
  && addgroup jtservice \
  && adduser -D -G jtservice jtservice -h /usr/local/jtservice

WORKDIR /usr/local/jtservice/

RUN mkdir -p tmp tmp/cache && chown -R jtservice tmp
# RUN apk add --no-cache ca-certificates libcurl libressl libxml2 libxslt \
#   postgresql-libs postgresql-client tzdata g++ make

COPY package*.json .
COPY tsconfig.json .

RUN npm install
# Root files
# COPY .rubocop.yml \
#   config.ru \
#   Rakefile \
#   .jt-devstatus.yml \
#   Messagebusfile \
#   Procfile.consumers \
#   ./

# Directories
# COPY bin bin
# COPY config config
# COPY db db
# COPY public public
# COPY script script

# Most updated directories last
# COPY test test
# COPY lib lib
# COPY app app
COPY src src

RUN npm run build

# ARG COMMIT_ID
# RUN test -n "${COMMIT_ID}"
# RUN echo "${COMMIT_ID}" > .commit_id
# ENV COMMIT_ID "${COMMIT_ID}"

ENV US_LOCALLAYER_PORT 3000
# ENV DISABLE_SPRING true
EXPOSE 3000
ENTRYPOINT [ "npm" ]
CMD ["run", "dev"]
