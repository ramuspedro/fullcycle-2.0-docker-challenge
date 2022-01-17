# NGINX

## Rodar o projeto

```sh
$ docker build -t ramuspedro/desafio2-nginx .

# criar network
$ docker create nodenet

# run container
$ docker run -d --network nodenet --name nginx -p 8080:8080 ramuspedro/nginx-desafio2
```