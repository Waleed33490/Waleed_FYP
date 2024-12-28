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
                        ssh -o StrictHostKeyChecking=no ubuntu@3.92.182.253 'cd /var/www/html && sudo npm install'
                        """
                    }
                }
            }
        }

        stage('Install PM2') {
            steps {
                script {
                    // Install PM2 globally on the remote server using SSH
                    echo 'Installing PM2 on the remote server...'
                    sshagent(['jenkins-ssh-key']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@3.92.182.253 'sudo npm install -g pm2'
                        """
                    }
                }
            }
        }

        stage('Run Development Server with PM2') {
            steps {
                script {
                    // Start the development server using PM2 on the remote server
                    echo 'Starting the development server on remote server with PM2...'
                    sshagent(['jenkins-ssh-key']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@3.92.182.253 'cd /var/www/html && sudo pm2 start npm --name "my-app" -- run dev'
                        """
                    }
                }
            }
        }

        stage('Save PM2 Process List') {
            steps {
                script {
                    // Save the PM2 process list and configure it to start on boot
                    echo 'Saving PM2 process list...'
                    sshagent(['jenkins-ssh-key']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@3.92.182.253 'cd /var/www/html && sudo pm2 save && sudo pm2 startup'
                        """
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Example deployment step: restart Apache on the remote server
                    echo 'Deploying the application on the remote server...'
                    sshagent(['jenkins-ssh-key']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@3.92.182.253 'sudo systemctl restart apache2'
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
