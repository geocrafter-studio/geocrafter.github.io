#!/bin/bash
set -e

cd astro

IMAGE_NAME="geocrafter-astro"
CONTAINER_NAME="geocrafter-astro"

MODE="${1:-prod}"

if [[ "$MODE" != "dev" && "$MODE" != "prod" ]]; then
    echo "Usage: $0 [dev|prod]"
    echo "  dev  - Local development server at http://localhost:4321"
    echo "  prod - Build and serve via nginx at http://localhost:80"
    exit 1
fi

echo "=== GeoCrafter Website Deploy ($MODE) ==="

# Stop existing container
echo "Stopping existing container..."
docker stop "$CONTAINER_NAME" 2>/dev/null || true
docker rm "$CONTAINER_NAME" 2>/dev/null || true

if [[ "$MODE" == "dev" ]]; then
    echo "Starting Astro development server..."
    docker run -d \
        --name "$CONTAINER_NAME" \
        -p "4321:4321" \
        -v "$(pwd):/app" \
        -w /app \
        node:20-alpine \
        sh -c "npm install && npm run dev -- --host 0.0.0.0"

    echo "=== Deployed successfully ==="
    echo "Site running at http://localhost:4321"
else
    echo "Building Astro site..."
    docker build -t "$IMAGE_NAME" .

    echo "Starting nginx production server..."
    docker run -d \
        --name "$CONTAINER_NAME" \
        -p "8085:80" \
        "$IMAGE_NAME"

    echo "=== Deployed successfully ==="
    echo "Site running at http://localhost:8085"
fi
