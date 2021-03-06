#!/usr/bin/env bash

set -e

./build.sh

# Push the most recent client container to DockerHub
echo "Pushing the newest client container..."
docker push ejacobson96/portfolio

# SSH into the client droplet and execute the client deployment script
echo "SSH-ing into the client droplet..."
ssh root@eric-jacobson.me 'bash -s' < run.sh