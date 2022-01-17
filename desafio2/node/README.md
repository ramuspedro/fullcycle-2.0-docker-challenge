# Projeto em Nodejs

## Rodar para teste
```sh
$ docker build -t ramuspedro/desafio2-nodejs .

# expondo porta
$ docker run -p 3000:3000 ramuspedro/desafio2-nodejs

# sem expor a porta
$ docker run --name nodejs --network nodenet ramuspedro/desafio2-nodejs
```