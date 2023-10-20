pipeline {
    agent {
        label 'jenkins-slave'
    }

    stages {
        stage('Build and Test') {
            steps {
                script {
                    // Inisialisasi modul Go
                    sh 'cd backend && go mod init my-backend-module'

                    // Build dan test layanan
                    sh 'cd backend && go build && go test'
                    sh 'cd frontend && npm install'
                    sh 'npm install mocha chai --save-dev'
                    sh 'cd frontend && npx mocha' // Menjalankan pengujian Mocha
                    
            
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Langkah b: Membangun gambar Docker
                    docker.build("my-backend-image", "./backend")
                    docker.build("my-frontend-image", "./frontend")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Langkah c: Simpan gambar Docker di Docker Hub
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("my-backend-image").push()
                        docker.image("my-frontend-image").push()
                    }
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                script {
                    // Langkah d: Terapkan manifest ke Minikube
                    sh 'kubectl apply -f backend-deployment.yaml -f frontend-deployment.yaml -f backend-service.yaml -f frontend-service.yaml'
                }
            }
        }
    }
}
