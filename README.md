
# BotiCashback

![CI](https://github.com/jarioneto/boti-cashback/workflows/CI/badge.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1e6526df-e8f8-4f93-9b8b-6d0e9cec83ce/deploy-status)](https://app.netlify.com/sites/boti-cashback/deploys)
![react](https://img.shields.io/github/package-json/dependency-version/jarioneto/boti-cashback/react)
![typescript](https://img.shields.io/github/package-json/dependency-version/jarioneto/boti-cashback/typescript)

Aplicação desenvolvida como avaliação para um desafio técnico.

Para acesso a aplicação utilizar o link a seguir [BotiCashback](https://boti-cashback.netlify.app).
* Usuário: jario@email.com
* Senha: 123456a

Todos os serviços consumidos pela aplicação são providos por meio de APIs fakes construídas com [JSON Server](https://www.npmjs.com/package/json-server).

Stack utilizada no desenvolvimento:
* TypeScript
* React
* Material UI
* Jest
* React Testing Library
* ESlint
* Prettier
* Continuos Integration
  * Github Actions (**build, lint, coverage**)

# Configuração inicial

Execute os passos abaixo para realizar a configuração inicial da aplicação.


### 1 - Variáveis de ambiente

Crie uma cópia do arquivo .env.example e e renomeie para .env

```bash
cp .env.example .env
```

Edite o arquivo criado no passo anterior e informe a URL da API

```bash
REACT_APP_API_URL=https://api-boti.herokuapp.com/
```


### 2 - Instalação das dependências

Para instalar as dependências da aplicação execute o comando abaixo:

```bash
yarn
```

# Scripts disponíveis

### Execução em modo de desenvolvimento

```bash
yarn start
```

### Executar linter do código

```bash
yarn lint
```

### Criar build de produção

```bash
yarn build
```

### Executar testes

```bash
yarn test
```

### Verificar cobertura do código

```bash
yarn coverage
```
