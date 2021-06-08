FROM node:lts-alpine as build-stage

ADD rss_ui /app/rss_ui

WORKDIR /app/rss_ui
RUN yarn
RUN yarn build

FROM python:3.8 as production-stage
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY --from=build-stage /app/public public
COPY server.py .
ENTRYPOINT [ "gunicorn", "server:app" ]
