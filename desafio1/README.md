# Desafio GO

## Gerar a imagem
```sh
$ docker build -t ramuspedro/codeeducation .
```

## Rodar
```sh
$ docker run ramuspedro/codeeducation
```

## Rodar do meu dockerhub

Link do meu dockerhub: https://hub.docker.com/repository/docker/ramuspedro/codeeducation

```sh
$ docker run ramuspedro/codeeducation
```

## Comandando de suporte

```sh
# Força eliminar todas as imagens
$ docker rmi $(docker images -a -q) -f 
```