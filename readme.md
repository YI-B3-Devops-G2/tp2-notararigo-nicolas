# B3 Devops - TP 2

## Info
mail: nicolas.notararigo@ynov.com
github_username: Neerfix

### Les fichiers du repo

- Readme (ce fichier)
- [ChangeLog](./changelog.md) - _Changements effectués au long des releases_ 
- [package.json](./package.json) - Fichier de NPM.
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
