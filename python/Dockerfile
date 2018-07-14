#FROM python:3-alpine
FROM ubuntu:18.04
MAINTAINER Niko Schmuck <niko@nava.de>

ARG BUILD_DATE
ARG VCS_REF

# Set labels (see https://microbadger.com/labels)
LABEL org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vcs-url="https://github.com/nikos/python3-alpine-flask-docker"


RUN mkdir -p /app
WORKDIR /app

RUN apt-get update
RUN apt-get install  -y python3 python3-pip curl

COPY requirements.txt /app/
RUN pip3 install Flask==0.10.1
RUN pip3 freeze > requirements.txt

COPY . /app

# Expose the Flask port
EXPOSE 5000

CMD [ "python3", "./app.py" ]