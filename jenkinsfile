pipeline {
    agent any
    parameters {
      choice(name: 'ENV', choices:['stage', 'prod'],  description: 'Choose environment')
      choice(name: 'SET', choices:['p1', 'p2'],  description: 'Choose test set')
    }
    triggers {
        parameterizedCron('''
            # leave spaces where you want them around the parameters. They'll be trimmed.
            # we let the build run with the default name
            */2 * * * * %ENV=stage;SET=p1
            */3 * * * * %ENV=prod;SET=p2
        ''')
    }
    stages {
        stage('Example') {
            steps {
                echo "${params.ENV} ${params.SET}"
                script { currentBuild.description = "${params.ENV} ${params.SET}" }
            }
        }
    }
}
