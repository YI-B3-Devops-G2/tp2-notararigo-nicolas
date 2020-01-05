
# B3 Devops - Projet 1

## Info

### Team 11

* mail: zakarya.tolba@ynov.com  <br>
github_username: zaktolba <br>

* mail: nicolas.laroche@ynov.com<br>
github_username: laroche-nicolas<br>

* mail: nicolas.notararigo@ynov.com<br>
github_username: Neerfix<br>

### Qu'est-ce que CircleCI?

![test](https://circleci.com/docs/assets/img/docs/arch.png)
_Image provenant de la documentation de CircleCI_

Une fois qu'un référentiel de logiciels sur GitHub ou Bitbucket est autorisé et ajouté en tant que projet à circleci.com , chaque changement de code déclenche des tests automatisés dans un conteneur ou une machine virtuelle propre. CircleCI exécute chaque travail dans un conteneur ou une machine virtuelle séparé.
CircleCI envoie ensuite une notification par e-mail de succès ou d'échec une fois les tests terminés.

### Les fichiers du repo
- .cicleci
    - [config.yml](./config.yml) - Fichier de configuration de circleci
    
    config.yml contains all the instructions for setting up the pipeleine, creating the image, build the container api then pushing on the docker hub.
 Le fichier config.yml correspond aux instructions pour paramétrer la pipeline, build le container et pousser sur le DockerHub.
 https://circleci.com/docs/2.0/configuration-reference/
 
 ### Fonctionnement
 
 ## Github
 Lorsque qu'un push sur la branche master est réalisé, CircleCI recréer une nouvelle image sur le DockerHub.
