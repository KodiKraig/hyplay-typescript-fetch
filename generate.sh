npx @openapitools/openapi-generator-cli generate -i $1 \
    -g typescript-fetch -o ./ \
    --additional-properties=npmName=hyplay-typescript-fetch \
    --additional-properties=npmVersion=1.0.0 \
    --additional-properties=supportsES6=true \
    --additional-properties=withInterfaces=true \
    --additional-properties=useSingleRequestParameter=true
