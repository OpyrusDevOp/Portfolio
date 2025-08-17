pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // copy dist/ to a serving directory
                sh '''
                mkdir -p ~/portfolio-deploy
                cp -r dist/* ~/portfolio-deploy/
                pm2 delete portfolio || true
                pm2 serve ~/portfolio-deploy 5173 --name portfolio --spa
                pm2 save
                '''
            }
        }
    }
}

