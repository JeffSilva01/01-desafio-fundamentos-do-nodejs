# README do Projeto Node

Este projeto é um servidor web construído com Node.js. Ele é responsável por fornecer endpoints (rotas) que permitem acessar e manipular uma lista de task.

Pré-requisitos
Antes de executar o projeto, certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar se o Node.js está instalado executando o seguinte comando no terminal:

```shell
node -v
```

Se o Node.js estiver instalado, você verá a versão do Node.js instalada em sua máquina. Caso contrário, você precisará instalar o Node.js antes de continuar.

```shell
npm i

npm run dev
```

Isso iniciará o servidor e ele começará a ouvir solicitações na porta 3333.

Rotas
O servidor possui as seguintes rotas:

## GET - /tasks

Esta rota retorna uma lista de tasks cadastrados no sistema.

## POST - /tasks

Esta rota cria uma novo task.

Corpo da solicitação

```Copy code
{
  "title": "New Task",
  "description": "description"
}
```

## PUT - /task/:id

Esta rota atualiza as informações de uma task específica, identificado pelo parâmetro id.

Parâmetros de consulta
id (obrigatório): O ID da task a ser atualizado.
Corpo da solicitação

```
{
  "title": "New Task",
  "description": "description"
}
```

## DELETE - /task/:id

Esta rota exclui uma task específica, identificado pelo parâmetro id.

Parâmetros de consulta
id (obrigatório): O ID do usuário a ser excluído.

## PATCH - /tasks/:id/complete

Esta rota atualiza o status de uma task específica, identificado pelo parâmetro id.
