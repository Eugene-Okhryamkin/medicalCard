pipeline {
    agent any

    stages {
        stage("build") {
            steps {
                git commit
            }
        }

        stage("server side test") {
            steps {
                sh "npm run test"
            }
        }
    }
}