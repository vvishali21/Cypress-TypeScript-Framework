pipeline {
    agent any
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/demo-tests/tests.cy.ts', description: 'Spec file')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }
    stages {
        stage('Build') {
            steps {
                echo "Building the application"
            }
        }
        stage('Testing') {
            steps {
                bat "npx cypress run"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying') {
            steps {
                echo "Deploy the application"
            }
        }
    }
    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'reports/mochawesome', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            emailext subject: "Pipeline Build Status: ${currentBuild.currentResult}", 
                     body: 'Please check the attached HTML report.', 
                     to: 'vishali.v@meteoriqs.com', 
                     attachmentsPattern: 'reports/mochawesome/index.html', 
                     recipientProviders: [culprits()]
        }
    }
}
