# Gunakan gambar Node.js sebagai gambar dasar
FROM node:14

# Setel direktori kerja di dalam kontainer
WORKDIR /app

# Salin file yang diperlukan ke dalam kontainer
COPY app.js .

# Install dependensi
RUN npm install

# Expose the port on which your Node.js app is running
EXPOSE 80

# Perintah yang akan dijalankan saat kontainer dimulai
CMD [ "node", "app.js" ]
