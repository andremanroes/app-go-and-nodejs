# Gunakan image Golang yang telah disediakan oleh Docker Hub
FROM golang:latest

# Set lingkungan kerja ke direktori backend
WORKDIR /go/src/app

# Salin kode backend ke dalam image
COPY . .

# Build aplikasi Go
RUN go get -d -v ./...
RUN go install -v ./...

# Eksekusi aplikasi Go
CMD ["./app"]
