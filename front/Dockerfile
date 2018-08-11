#FROM python:3-alpine
FROM ubuntu:18.04

ARG BUILD_DATE
ARG VCS_REF

# Set labels (see https://microbadger.com/labels)
LABEL org.label-schema.build-date=$BUILD_DATE

RUN mkdir -p /app
WORKDIR /app

RUN apt-get update && apt-get install -y npm nodejs curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
RUN npm install
#RUN export NVM_DIR="$HOME/.nvm"
#RUN [ -s "~/.nvm/nvm.sh" ] && \. "~/.nvm/nvm.sh"
#RUN nvm install 8.4.0
#RUN nvm use 8.4.0
#RUN npm install -g npm@6.2.0
#COPY package*.json /app/
#RUN npm install
#RUN npm run dev
COPY . /app

EXPOSE 8080

CMD ["npm", "run", "dev"]
