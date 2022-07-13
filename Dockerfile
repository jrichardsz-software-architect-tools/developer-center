FROM node:14 as BUILDER

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install

EXPOSE 8000
COPY DockerEntryPoint.sh /usr/local/bin/DockerEntryPoint.sh
RUN chmod 744 /usr/local/bin/DockerEntryPoint.sh

ENTRYPOINT ["DockerEntryPoint.sh"]
