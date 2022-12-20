pipeline {
    agent {
        docker {
            image 'node:10-alpine'
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'ng build --prod'
            }
        }
        stage('Test') {
            steps {
                sh 'ng test --watch=false'
            }
        }
        stage('Deploy') {
            steps {
                sh 'ng deploy --prod'
            }
        }
    }
}



// #!groovy
// pipeline {
//     agent any
//     stages {
//         // stage('Checkout') {
//         //     steps {
//         //         checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/secknda/learn-angular.git']]])
//         //     }
//         // }
//         stage('Build') {
//             steps {
//                 bat 'make'
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh 'make test'
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 sh './deploy.sh'
//             }
//         }
//     }
//     post {
//         always {
//             slackSend channel: '#build-notifications', color: '#000000', message: "Pipeline completed: ${currentBuild.currentResult}", teamDomain: 'myteam', tokenCredentialId: 'abcdefgh-1234-5678-abcd-efghijklmnop'
//         }
//     }
// }



// pipeline {
//     agent any

//     stages {
//         stage('Build') {
//             steps {
//                 echo 'Building project...'
//                 // Ajoutez ici les étapes de construction de votre projet
//             }
//         }
//         stage('Test') {
//             steps {
//                 echo 'Running tests...'
//                 // Ajoutez ici les étapes de test de votre projet
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 echo 'Deploying to staging environment...'
//                 // Ajoutez ici les étapes de déploiement de votre projet sur un environnement de staging
//             }
//         }
//         stage('Release') {
//             steps {
//                 echo 'Releasing to production environment...'
//                 // Ajoutez ici les étapes de déploiement de votre projet sur un environnement de production
//             }
//         }
//     }
// }
