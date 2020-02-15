#!/bin/sh

docker build -t compose-flask compose_flask/

docker-compose up
