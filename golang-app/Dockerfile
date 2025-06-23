FROM golang:1.21-bullseye

WORKDIR /app

COPY . .

RUN go mod download
RUN go build -o build/fizzbuzz

EXPOSE 8080

CMD ["./build/fizzbuzz", "serve"]