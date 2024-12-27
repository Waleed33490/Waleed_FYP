pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin/node'  // Adjust this path if necessary
        PATH = "$NODE_HOME:$PATH"
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from the Git repository
                git branch: 'main', url: 'https://github.com/Waleed33490/Waleed_FYP.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies on the remote server using SSH
                    echo 'Installing dependencies on remote server...'
                    sshagent(['jenkins-ssh-key']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@54.86.238.1 'cd /var/www/html && sudo npm install'
                        """
                    }
                }
            }
        }

        stage('Run Development Server') {
            steps {
                script {
                    // Run the development server on the remote server using SSH
                    echo 'Starting the development server on remote server...'
                    sshagent(['jenkins-ssh-key']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@54.86.238.1 'cd /var/www/html && sudo npm run dev'
                        """
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Example deployment step (e.g., restart Apache on the remote server)
                    echo 'Deploying the application on the remote server...'
                    sshagent(['jenkins-ssh-key']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@54.86.238.1 'sudo systemctl restart apache2'
                        """
                    }
                }
            }
        }

        stage('Clean Up') {
            steps {
                // Clean up actions (e.g., remove temporary files, etc.)
                echo 'Cleaning up...'
            }
        }
    }

    post {
        always {
            // Always run after the pipeline finishes (success or failure)
            echo 'Pipeline finished. Cleaning up resources.'
        }
        success {
            // Actions to take if the pipeline is successful
            echo 'Build and deployment successful.'
        }
        failure {
            // Actions to take if the pipeline fails
            echo 'Build failed. Investigate the issues.'
        }
    }
}
