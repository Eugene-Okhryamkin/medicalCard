pipeline {
    agent {
        label "master"
    }

    stages {
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