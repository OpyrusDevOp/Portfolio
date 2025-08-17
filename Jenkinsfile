pipeline {
    agent any
    node {
        env.NODEJS_HOME = "${tool 'Node 24.x'}"
        // on linux / mac
        env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
        // on windows
        sh 'npm --version'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        // stage('Deploy') {
        //     steps {
        //         // copy dist/ to a serving directory
        //         sh '''
        //         mkdir -p ~/portfolio-deploy
        //         cp -r dist/* ~/portfolio-deploy/
        //         pm2 delete portfolio || true
        //         pm2 serve ~/portfolio-deploy 5173 --name portfolio --spa
        //         pm2 save
        //         '''
        //     }
        // }
    }
}

