#!groovy
pipeline {
  agent any
  stages {
    stage("Building Image") {
      steps {
        script {
          docker.withRegistry("https://docker.wissenswerft.net", "docker-wissenswerft-credentials") {
            def appImage = docker.build("aurora/showcase", "-f Dockerfile --no-cache .")
            if (env.BRANCH_NAME == "master") {
              appImage.push("latest")
            }
            appImage.push(env.BRANCH_NAME)
          }
        }
      }
    }
  }
}
