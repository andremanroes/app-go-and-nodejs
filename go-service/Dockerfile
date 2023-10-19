# For Go service
FROM golang:1.16 as builder
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 go build -o go-service main.go

FROM scratch
COPY --from=builder /app/go-service /go-service
CMD ["/go-service"]
