# Gunakan image Node.js yang telah disediakan oleh Docker Hub
FROM node:latest

# Set lingkungan kerja ke direktori frontend
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependensi Node.js
RUN npm install

# Salin kode frontend ke dalam image
COPY . .

# Eksekusi aplikasi Node.js
CMD ["npm", "start"]
