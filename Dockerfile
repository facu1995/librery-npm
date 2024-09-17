FROM node:16.19-alpine as base

ARG VERSION=0.0.0

LABEL maintainer="Team Infrastructure <architecture@infosis.tech>" \
      org.label-schema.vcs-url="https://gitlab.infosisglobal.com/frontend/storybook" \
      org.label-schema.version=$VERSION \
      org.label-schema.schema-version="1.0"

ENV TZ=America/Argentina/Buenos_Aires

ENV BASE_DEPS \
    bash \
    curl \
    tzdata \
    ca-certificates

WORKDIR /usr/src/app


FROM base as build

COPY package.json ./package.json

COPY . ./

# Install dependencies
RUN apk add --update --no-cache ${BASE_DEPS} \
    && yarn install \
    && yarn build-storybook \
    # Cleanup
    && rm -rf /var/cache/apk/*


FROM base as runtime

COPY . .

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/storybook-static ./storybook-static

RUN npm install -g http-server

EXPOSE 8080

CMD ["yarn", "run", "server"]
