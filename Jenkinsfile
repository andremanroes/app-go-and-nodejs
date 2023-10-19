pipeline {
    sh "pwd"
    agent any

    stages {
        stage('Build and Test') {
            steps {
                sh 'go build ./go-service/main.go'
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('Build Container Images') {
            steps {
                script {
                    docker.build("my-app-go-service:${env.BUILD_NUMBER}", './go-service')
                    docker.build("my-app-node-service:${env.BUILD_NUMBER}", './node-service')
                }
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("my-app-go-service:${env.BUILD_NUMBER}").push()
                        docker.image("my-app-node-service:${env.BUILD_NUMBER}").push()
                    }
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful'
        }
        failure {
            echo 'Deployment failed'
        }
    }
}
