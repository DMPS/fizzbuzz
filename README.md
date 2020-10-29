# Dalton Scott Fizzbuzz

Howdy! Here's a simple Dockerized Fizzbuzz API.

## Prerequisites

- Docker
- Node.js 10

## Usage

1. Build the docker image locally: `docker build -t <your username>/fizzbuzz .`
1. Run the docker container locally: `docker run -p <PORT>:8080 -d <your username>/fizzbuzz`
1. You can test out the API with a simple CURL: `curl -i localhost:<PORT>/?value=15`
1. You should get a result like below:


```json
{
    "result":"fizzbuzz"
}
```

### Publicly Available

There's also a version of the API running on Google Cloud Run: 