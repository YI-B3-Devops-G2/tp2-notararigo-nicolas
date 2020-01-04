[![CircleCI](https://circleci.com/gh/YI-B3-Devops/tp2-team-11/tree/master.svg?style=svg)](https://circleci.com/gh/YI-B3-Devops/tp2-team-11/tree/master)

# B3 Devops - Projet 1

## Info

Team 11
---
mail: Zakarya.tolba@ynov.com
github_username: zaktolba
---
mail: nicolas.laroche@ynov.com
github_username: laroche-nicolas
---
mail: nicolas.notararigo@ynov.com
github_username: Neerfix
---

### DockerHub
link: https://hub.docker.com/repository/docker/neerfix/tp2-team-11

### DockerHub
Basé sur le projet : https://github.com/YI-B3-Devops/tp2-notararigo-nicolas

### Les fichiers du repo

- Readme (ce fichier)
- [ChangeLog](./changelog.md) - _Changements effectués au long des releases_ 
- [package.json](./package.json) - Fichier de NPM.
- .cicleci
    - [config.yml](./.circleci/config.yml) - Fichier de configuration de circleci
- [docker](./docker/) - Contient les containers docker.
    - [docker-compose](./docker/docker-compose.yml) - docker compose du projet.
        - [api](./docker/api/Dockerfile) - Dockerfile de NodeJs.
        - [nginx](./docker/nginx/Dockerfile) - Dockerfile de Nginx.
            - [nginx.conf](./docker/nginx/nginx.conf) - configuration de Nginx.   

## Installation

1) Clôner le repo dans votre espace. 
2) Se rendre dans le dossier avec son terminal.
3) Lancer la commande suivante pour se rendre dans le dossier de docker et lancer le projet : 
```bash 
cd docker && docker-compose up
```

Vous pouvez vous rendre sur le serveur via 
[localhost:8080](http://localhost:8080)

## L'API

- GET /

```
Welcome on Nginx
```
- GET /api
```
{"message": "Hello World" }
```
- GET /status
```
{"status": "OK", "postgresUptime": String, "redisConnectedClients": Number}
```
