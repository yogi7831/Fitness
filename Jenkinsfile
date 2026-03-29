@Library("Shared") _
pipeline {
    agent { label 'agent1' }

    stages {
        stage("hello") {
            steps{
                script{
                    hello()
                }
                }
        }
        
      stage("Code") {
       steps {
             script {
                 clone("https://github.com/yogi7831/Fitness.git","main")
             }
                echo 'Cloning of Code Successful'
          }
       }

        stage("Build") {
            steps {
                script{
                    docker_build("note-app","latest","yogi7831","frontend")
                }
            }
        }

        stage("Push to DockerHUB") {
            steps {
                script{
                    docker_push("note-app","latest","yogi7831")
                }
            }
        }

        stage("Deploy") {
            steps {
                echo 'This is Deploy'
                sh "docker compose down"
                sh "docker compose up -d --build --force-recreate"
            }
        }
    }
}
