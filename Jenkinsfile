pipeline {
    agent any
    
    tools {
      nodejs 'Node24'
    }

    stages {
        stage('Build') {
            steps {
              nodejs('Node24') {
                sh 'npm install'
              }
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

