Simple App Go and Node.js

Ini adalah repositori yang berisi aplikasi dengan bagian backend yang ditulis dalam Go dan bagian frontend yang ditulis dalam Node.js. Aplikasi ini juga dilengkapi dengan konfigurasi Docker dan Kubernetes untuk Deployment, serta Jenkinsfile untuk otomatisasi proses CI/CD.

Struktur Direktori
    app-go-and-nodejs/
|-- backend/
|   |-- Dockerfile
|   |-- main.go
|
|-- frontend/
|   |-- Dockerfile
|   |-- app.js
|   |-- index.html
|   |-- my-test.js
|   |-- package.json
|
|-- k8s/
|   |-- backend-deployment.yaml
|   |-- frontend-deployment.yaml
|   |-- service.yaml
|
|-- Jenkinsfile

Berikut adalah penjelasan lebih lanjut tentang setiap direktori dan berkas di dalamnya:

    backend/: Ini adalah direktori yang berisi kode sumber backend aplikasi yang ditulis dalam Go.
        Dockerfile: Berkas Dockerfile yang digunakan untuk mengonfigurasi dan build images Docker untuk backend.
        main.go: Kode sumber aplikasi backend Go.

    frontend/: Ini adalah direktori yang berisi kode sumber frontend aplikasi yang ditulis dalam Node.js.
        Dockerfile: Berkas Dockerfile yang digunakan untuk mengonfigurasi dan build images Docker untuk frontend.
        app.js: Kode sumber aplikasi frontend Node.js.
        index.html: Berkas HTML untuk tampilan frontend.
        my-test.js: Berkas pengujian frontend menggunakan Mocha dan Chai.
        package.json: Berkas konfigurasi Node.js untuk aplikasi frontend.

    k8s/: Ini adalah direktori yang berisi berkas-berkas konfigurasi Kubernetes untuk deploy aplikasi.
        backend-deployment.yaml: Konfigurasi deploy Kubernetes untuk backend.
        frontend-deployment.yaml: Konfigurasi deploy Kubernetes untuk frontend.
        service.yaml: Konfigurasi Layanan Kubernetes untuk backend dan frontend.

    Jenkinsfile: Berkas Jenkinsfile yang mengotomatiskan proses CI/CD dari aplikasi, termasuk langkah-langkah seperti inisialisasi Go, pengujian, build images Docker, dan deploy to Minikube.

Langkah-Langkah CI/CD dalam Jenkinsfile

    Build and Test: Tahap ini memastikan aplikasi berfungsi dengan baik dan lulus pengujian sebelum build images Docker.
        Inisialisasi Go dan Go module.
        Build dan uji layanan backend Go.
        Instal dependensi frontend Node.js.
        Jalankan pengujian Mocha dan Chai pada frontend.

    Build Docker Image: Tahap ini build images Docker untuk backend dan frontend.
        build images Docker backend dari direktori "backend".
        build images Docker frontend dari direktori "frontend".

    Push to Docker Hub: Tahap ini menyimpan images Docker ke Docker Hub (pastikan Anda telah masuk sebelumnya).
        Simpan images Docker backend ke Docker Hub.
        Simpan images Docker frontend ke Docker Hub.

    Deploy to Minikube: Tahap ini menerapkan konfigurasi Kubernetes ke cluster Minikube.
        Terapkan konfigurasi Kubernetes (deployment dan layanan) dari berkas YAML ke Minikube.
