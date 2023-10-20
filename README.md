Aplikasi Go dan Node.js dengan Kubernetes dan Jenkins

Proyek ini bertujuan untuk memperlihatkan bagaimana kita dapat membuat dan mendeploy dua aplikasi berbeda, yaitu backend yang ditulis dalam bahasa Go dan frontend yang ditulis dalam bahasa Node.js, ke dalam sebuah cluster Kubernetes menggunakan Jenkins. CI/CD (Continuous Integration/Continuous Deployment) adalah praktik yang digunakan dalam proyek ini untuk mengotomatisasi proses pengembangan, pengujian, dan penyebaran aplikasi.
Struktur Folder

    backend: Berisi kode untuk backend yang ditulis dalam bahasa Go.
        Dockerfile: Digunakan untuk membuild image Docker untuk aplikasi backend.
        main.go: Kode utama untuk aplikasi backend.

    frontend: Berisi kode untuk frontend yang ditulis dalam Node.js.
        Dockerfile: Digunakan untuk membuild image Docker untuk aplikasi frontend.
        index.html: Halaman utama frontend.
        package.json: Berkas konfigurasi Node.js.

    k8s: Berisi konfigurasi Kubernetes untuk mendeploy aplikasi.
        backend-deployment.yaml: Konfigurasi Deployment untuk backend.
        frontend-deployment.yaml: Konfigurasi Deployment untuk frontend.
        service.yaml: Konfigurasi Service untuk keduanya.

    Jenkinsfile: Berkas Jenkins Pipeline untuk mengotomatisasi proses build, uji, dan deployment aplikasi.

Continuous Integration (CI)
Langkah 1: Build dan Uji

Dalam tahap ini, Jenkins mengotomatisasi proses pengujian dan build untuk kedua aplikasi:

    Inisialisasi modul Go untuk backend.
    Build dan uji aplikasi backend menggunakan perintah go build dan go test.
    Install dependensi yang diperlukan untuk frontend.
    Build aplikasi frontend menggunakan npm.
    Jalankan pengujian Mocha pada frontend.

Langkah 2: Build Docker Image

Setelah proses build selesai, Jenkins akan mengotomatisasi proses pembuatan image Docker untuk kedua aplikasi:

    membuild image Docker untuk backend dengan perintah docker.build("my-backend-image", "./backend").
    membuild image Docker untuk frontend dengan perintah docker.build("my-frontend-image", "./frontend").

Langkah 3: Push to Docker Hub

Setelah image Docker berhasil dibuild, Jenkins akan mengotomatisasi proses push image Docker ke Docker Hub:

    Simpan image Docker di Docker Hub menggunakan kredensial yang terdaftar.

Continuous Deployment (CD)
Deploy to Minikube

Setelah image Docker berhasil di push, Jenkins akan mengotomatisasi proses penyebaran aplikasi ke dalam cluster Kubernetes (dalam kasus ini, Minikube):

    Terapkan konfigurasi Kubernetes yang didefinisikan dalam file backend-deployment.yaml, frontend-deployment.yaml, dan service.yaml ke dalam cluster Minikube. Ini akan mendeploy tiga replika dari backend dan frontend, serta menyediakan layanan LoadBalancer untuk akses eksternal.

Proses CI/CD ini memastikan bahwa setiap kali ada perubahan dalam kode aplikasi, proses CI/CD akan dijalankan secara otomatis, sehingga Anda dapat memastikan bahwa aplikasi Anda selalu dalam keadaan teruji dan dapat dideploy ke dalam lingkungan produksi atau pengujian dengan cepat.

kita dapat menyesuaikan konfigurasi Jenkins Pipeline ini sesuai dengan kebutuhan Anda, seperti menambahkan langkah-langkah tambahan atau mengganti alur proses sesuai dengan persyaratan proyek Anda. Proses CI/CD ini memungkinkan Anda untuk mengotomatisasi sebagian besar tugas pengembangan, meningkatkan efisiensi, dan mengurangi kesalahan manusia dalam proses pengujian dan penyebaran aplikasi.
