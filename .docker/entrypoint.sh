#!/bin/bash

if [[ -z $PORT ]]; then
    PORT=3000
fi

echo "Starting client server on PORT=${PORT} ..."
serve -s ./build/ -l $PORT