const http = require('http');

const options = {
  hostname: 'localhost',
  port: 80,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    document.getElementById("backendResponse").textContent = data;
  });
});

req.on('error', (error) => {
  console.error("Error fetching data:", error);
});

req.end();
