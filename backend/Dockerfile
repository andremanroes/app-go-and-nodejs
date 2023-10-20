# Menggunakan gambar resmi Golang sebagai gambar dasar
FROM golang:latest

# Setel direktori kerja di dalam kontainer
WORKDIR /app

# Salin kode lokal ke kontainer
COPY . .

# Kompilasi aplikasi Go
RUN go build -o app

# Port yang akan digunakan oleh aplikasi
EXPOSE 8080

# Perintah yang akan dijalankan saat kontainer dimulai
CMD ["./app"]
