pipeline {
    agent any

    environment {
        // Define environment variables
        REMOTE_SERVER = 'ubuntu@54.86.238.1'
        SSH_KEY = credentials('jenkins-ssh-key')  // Replace with your Jenkins SSH key ID
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your Git repository
                git url: 'https://github.com/Waleed33490/Waleed_FYP.git', branch: 'main'  // Replace with your Git repo and branch
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm
                    sh 'npm install'
                }
            }
        }

        stage('Run Development Server') {
            steps {
                script {
                    // Run the development server using npm
                    sh 'npm run dev'
                }
            }
        }
    }

    post {
        success {
            echo 'Development server started successfully!'
        }
        failure {
            echo 'Failed to start the development server.'
        }
    }
}
