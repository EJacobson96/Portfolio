#!/usr/bin/env bash

# Pull the newest version of the client
echo "Pulling newest version of the container..."
docker pull ejacobson96/portfolio

# Remove the client container if it already exists
if [ "$(docker ps -aq --filter name=portfolio)" ]; then
    echo "Removing the client container..."
    docker rm -f portfolio
fi

# Clean up old images
docker image prune -f

# Run the new client container
docker run -d -p 80:80 -p 443:443 -v /etc/letsencrypt:/etc/letsencrypt:ro \
--name portfolio ejacobson96/portfolio
