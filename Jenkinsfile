pipeline {
    agent any

    stages {
        stage('Build and Test') {
            steps {
                script {
                    // Langkah a: Build dan test layanan
                    sh 'cd backend && go build && go test'
                    sh 'cd frontend && npm install && npm test'
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
