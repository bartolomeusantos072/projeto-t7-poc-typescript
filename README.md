# Prestacao de Serviço (Break Branch)
<p align = "center">
   <img src="https://i.ibb.co/kyvJJJM/jellyfish.png" alt="" width="200" />
</p>


Essa é uma API onde prestadores de serviço(famosos quebra-galho) se cadastram para anunciar seus serviços e os usuarios podem buscar e solicitar por eles ou ate mesmo se torna um prestador de serviço

## Mostrar funcionamento


## About
O Break Branch é uma API com o qual muitas pessoas podem prestar ou solicitar serviços :

- Listar todos os serviços
- Buscar serviço por nome
- Inscrever-se
- Conecte-se
- Cadastrar o serviço que você pode prestar a sociedade,
- Visualizar serviço de acordo com o usuario ativo
- Alterar o nome ou valor do serviço
- Deletar um serviço

Ao utilizar esse aplicativo qualquer pessoa pode solicitar ou oferercer um serviço

##  💻 Tecnologias e conceitos abordados

- Node.js
- TypeScript
- Prisma
- Postgres
- JWT
- API REST
- Banco de Dados Relacional
- Arquitetura em camadas

---
#  Warning
1.Este projeto precisa da plataforma Node.js para ser executado, caso você precisa instalar acesse [ Node.js ](https://nodejs.org/en/download/) 
e [ npm ](https://www.npmjs.com/ ) primeiro.
2.Lembre-se de iniciar seu banco de dados localmente e criar um arquivo `.env` com as variáveis ​​de ambiente listadas em `.env.example` .
3.Utilize o visual code com a extensao Thunder Client(https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

#  How to run

1.Clone este repositorio com o seguinte comando:

```
gh repo clone Uenderss/projeto-t7-poc-typescript
```

Então, no diretório do projeto, você pode executar:

```
npm install
```

para instalar as dependências.

E então executar o

```
npm test
```
para executar o servidor.

Abra seu VSCode e clique na extensão Thunder Client à esquerda em seguida escolha em menu->import e selecione "testar_poc.json"

## 🚀 Routes with examples

### User register 

```
POST /sign-in
    - headers: {}
    - body: {
        "name":"Sivirino",
        "email":"quebragalho@gmail.com",
        "password":"123456",
        "phone":"3235321415",
        "cellphone":"32999257063",
        "cpf":"12345678911",
        "photo":"https://en.wikipedia.org/wiki/File:Elmer_in_Rabbit_Fire_(1951).png",
        "address":{
           "street":"Rua Rogerio Portela",
           "number":"14",
           "complement":"",
           "suburb":"Fragoso",
           "zipCode":"36500123",
           "country":"Mage",
           "referencePoint":"Bar do Pelé"
         }
}

```

### User login 

```
POST /sign-in
    - headers: {}
    - body: {
        "email":"quebragalho@gmail.com",
        "password":"password"
      }
```

### Add Job with credential

```
POST /job-create
    - headers: {
        "Authorization": "Bearer <token>"
      }
    - body: {
         "descrition":"Motagem e manutenção de computador",
         "price":"R$ 100,00"
      }
```

### Read user jobs 

```
GET /job-read
    - headers: {
        "Authorization": "Bearer <token>"
      }
    - body: {}
```

### update user jobs

```
PUT /job-update/:id
    - headers: {
        "Authorization": "Bearer <token>"
      }
    - body: {
         "descrition":"manicure e pedicure"
     }
```
OR
```
    - body: {
         "price":"R$ 50,00"
     }
```
OR
```
    - body: {
         "descrition":"manicure e pedicure",
         "price":"R$ 140,00"
     }
```

### Remove jobs

```
DELETE /job-delete/:id
    - headers: {
        "Authorization": "Bearer <token>"
      }
    - body: {}
```
### View Jobs
```
GET /job-all
    - headers: {}
    - body: {}
```
### Search Jobs
```
DELETE /job-delete/:id
    - headers: {
        "Authorization": "Bearer <token>"
      }
    - body: {}
```
