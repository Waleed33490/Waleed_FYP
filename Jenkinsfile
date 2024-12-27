pipeline {
    agent any
    
    environment {
        // Define environment variables
        REMOTE_SERVER = 'ubuntu@54.86.238.1'
        REMOTE_PATH = '/var/www/html'
        SSH_KEY = credentials('jenkins-ssh-key')  // Replace with your Jenkins SSH key ID
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your Git repository
                git 'https://github.com/Waleed33490/Waleed_FYP.git'  // Replace with your Git repo URL
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

        stage('Build') {
            steps {
                script {
                    // Build the project using npm
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the built project to the remote server using SSH
                    sh """
                        ssh -i ${SSH_KEY} ${REMOTE_SERVER} << 'EOF'
                            # Navigate to the remote project directory
                            cd ${REMOTE_PATH}
                            # Remove old files (if necessary)
                            sudo rm -rf *
                            # Copy new build files from the Jenkins workspace to the server
                            sudo cp -r /var/jenkins_home/workspace/${JOB_NAME}/dist/* ${REMOTE_PATH}
                            # Set correct permissions
                            sudo chown -R ubuntu:ubuntu ${REMOTE_PATH}
                            sudo chmod -R 755 ${REMOTE_PATH}
                        EOF
                    """
                }
            }
        }

        stage('Restart Apache') {
            steps {
                script {
                    // Restart Apache to reflect the changes
                    sh 'ssh -i ${SSH_KEY} ${REMOTE_SERVER} "sudo systemctl restart apache2"'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
