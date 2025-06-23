FROM golang:1.21-bullseye AS builder

WORKDIR /app

COPY . .

RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o fizzbuzz .

FROM gcr.io/distroless/static-debian11

COPY --from=builder /app/fizzbuzz /fizzbuzz

EXPOSE 8080

ENTRYPOINT ["/fizzbuzz"]
CMD ["serve"]