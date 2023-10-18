
pipeline {

    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/', description: 'Ej: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }

    stages {
        
        stage('Build'){
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        
        stage('Deploying'){
            steps {
                echo "Deploy the application"
            }
        }
    }

    post {
        always {
           
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'reports/mochawesome', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])

        }
    }
}
