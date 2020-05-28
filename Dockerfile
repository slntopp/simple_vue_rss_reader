FROM node:lts-alpine as build-stage

ADD ./public /app/public
ADD ./rss_ui /app/rss_ui

WORKDIR /app/rss_ui
RUN npm install
RUN npm run build

# RUN ls public
# COPY public .

FROM python:3.8 as production-stage
WORKDIR /app
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY --from=build-stage /app/public public
COPY ./server.py .
ENTRYPOINT [ "gunicorn", "server:app" ]