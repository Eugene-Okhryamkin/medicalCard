pipeline {
    agent {
        label "master"
    }

    stages {
        stage("build") {
            steps {
                sh "npm install"
            }
        }

        stage("test") {
            steps {
                sh "npm run test"
            }
        }

        stage("deliver") {
            if(env.BRANCH_NAME == "master") {
                echo "deliver"
            }
        }
    }
}