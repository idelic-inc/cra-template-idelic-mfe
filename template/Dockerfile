FROM node:12 AS build

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --pure-lockfile

COPY ./.eslintrc ./
COPY ./.prettierrc ./
COPY ./tsconfig.json ./
COPY ./craco.config.ts ./
COPY ./src ./src
COPY ./public ./public

RUN yarn build

FROM httpd:2

RUN sed -i \
    -e 's/^#\(LoadModule .*mod_rewrite.so\)/\1/' \
    conf/httpd.conf

RUN sed -i \
  -e 's/^#\(LoadModule .*mod_ssl.so\)/\1/' \
  conf/httpd.conf

RUN sed -i \
  -e 's/^\(Listen 80\)/#\1/' \
  conf/httpd.conf

RUN echo '<Directory "/usr/local/apache2/htdocs">' >> conf/httpd.conf && \
    echo '    AllowOverride All' >> conf/httpd.conf && \
    echo '</Directory>' >> conf/httpd.conf

RUN echo 'Include conf.d/*.conf' >> conf/httpd.conf

COPY --from=build /build ./htdocs

COPY ./apache_config ./conf.d/
