FROM ubuntu:16.04

MAINTAINER VietHung<viethung@gmail.com>

WORKDIR /venv

COPY start.sh /venv

RUN chmod a+x /venv/*

ENTRYPOINT ["/venv/start.sh"]

EXPOSE 80