#!/usr/bin/env bash

set -e

# Build the production version of the client
echo "Building source files via Webpack..."
npm run build

# Build the client Docker container image
echo "Building Docker container..."
docker build -t ejacobson96/portfolio .

if [ "$(docker ps -aq --filter name=milestone-client)" ]; then
    echo "Removing client container..."
    docker rm -f portfolio
fi

# Remove dangling images.
if [ "$(docker images -q -f dangling=true)" ]; then
    echo "Removing dangling images..."
    docker rmi $(docker images -q -f dangling=true)
fi