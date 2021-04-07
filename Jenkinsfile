
 !groovy
 pipeline {
   agent 'docker'
   stages {
     stage("Building Image") {
       steps {
         script {
+          docker.withTool('Docker 20.10.5') {
             docker.withRegistry("https://docker.wissenswerft.net", "docker-wissenswerft-credentials") {
               def appImage = docker.build("aurora/showcase", "-f Dockerfile --no-cache .")
               if (env.BRANCH_NAME == "master") {
                 appImage.push("latest")
               }
               appImage.push(env.BRANCH_NAME)
             }
+          }
         }
       }
     }
   }
 }
