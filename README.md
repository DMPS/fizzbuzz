# Dalton Scott Fizzbuzz

Howdy! Here's a simple Dockerized Fizzbuzz API.

## Prerequisites

- Docker
- Node.js 10

## Usage

1. Build the docker image locally: `docker build -t <your username>/fizzbuzz .`
1. Run the docker container locally: `docker run -p <PORT>:8080 -d <your username>/fizzbuzz`
1. You can test out the API with a simple CURL: 

```bash
    curl -X POST \
    http://localhost:<PORT>/fizzbuzz \
    -H 'Content-Type: application/json' \
    -H 'Postman-Token: 5d1cedeb-f897-497b-86af-ee7527e04b90' \
    -H 'cache-control: no-cache' \
    -d '{"count":15}'
```

1. You should get a result like below:

```json
{
    "response": "fizzbuzz",
    "error": ""
}
```

### Publicly Available

There's also a version of the API running on Google Cloud Run: https://fizzbuzz-wztc7suijq-ew.a.run.app/fizzbuzz
