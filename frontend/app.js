document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8080")
      .then(response => response.text())
      .then(data => {
          document.getElementById("backendResponse").textContent = data;
      })
      .catch(error => {
          console.error("Error fetching data:", error);
      });
});
