# Simple Finance API

## Visão Geral

A Simple Finance API é uma API RESTful completa para controle financeiro, desenvolvida em Node.js com TypeScript. Ela permite aos usuários gerenciar transações financeiras (crédito e débito), visualizar o extrato e obter um resumo consolidado dos lançamentos. O projeto foi construído com foco em boas práticas de desenvolvimento, testes automatizados e uma arquitetura robusta e escalável.

## Funcionalidades

  * **Criação de Transações:** Permite o registro de novas transações financeiras, especificando um título, valor e tipo (crédito ou débito).
  * **Listagem de Transações:** Retorna o histórico completo de transações do usuário.
  * **Extrato por Transação:** Permite a visualização de uma transação específica por meio de seu ID.
  * **Resumo Financeiro:** Apresenta um resumo com o saldo total das transações do usuário.
  * **Gerenciamento de Sessão:** Utiliza cookies para gerenciar a sessão do usuário, garantindo que cada usuário tenha acesso apenas às suas próprias transações.

## Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

  * **Node.js:** Ambiente de execução JavaScript no servidor.
  * **Fastify:** Framework web para Node.js, conhecido por sua alta performance e baixo overhead.
  * **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a manutenibilidade.
  * **Knex.js:** Construtor de consultas SQL (Query Builder) para Node.js, compatível com diversos bancos de dados.
  * **Bancos de Dados:**
      * **SQLite:** Utilizado como banco de dados principal para desenvolvimento e testes.
      * **PostgreSQL:** O projeto também oferece suporte ao PostgreSQL, bastando configurar as variáveis de ambiente.
  * **Zod:** Biblioteca para validação de esquemas e tipos de dados.
  * **Vitest:** Framework de testes unitários e de integração, garantindo a qualidade e o correto funcionamento da API.
  * **Supertest:** Biblioteca para testar APIs HTTP.
  * **tsx:** Executa arquivos TypeScript diretamente, sem a necessidade de uma etapa de compilação explícita durante o desenvolvimento.
  * **tsup:** Ferramenta para empacotar (bundler) o código TypeScript para produção.

## Estrutura do Projeto

O projeto segue uma estrutura organizada, separando as responsabilidades em diferentes camadas:

  * **`src/`**: Contém o código-fonte da aplicação.
      * **`app.ts`**: Arquivo principal que inicializa e configura a aplicação Fastify.
      * **`database.ts`**: Configuração da conexão com o banco de dados utilizando o Knex.
      * **`env/`**: Gerenciamento das variáveis de ambiente com validação utilizando Zod.
      * **`middlewares/`**: Contém os middlewares da aplicação, como a verificação de sessão.
      * **`routes/`**: Definição das rotas da API.
      * **`@types/`**: Arquivo de definição de tipos para o Knex.
  * **`db/`**:
      * **`migrations/`**: Contém as migrações do banco de dados, responsáveis por criar e alterar as tabelas.
  * **`test/`**: Contém os testes automatizados da aplicação.

## Como Executar o Projeto

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**

    Crie um arquivo `.env` na raiz do projeto, utilizando o `.env.example` como referência:

    ```env
    NODE_ENV=development
    DATABASE_CLIENT=sqlite
    DATABASE_URL="./db/app.db"
    PORT=3333
    ```

4.  **Execute as migrações do banco de dados:**

    ```bash
    npm run knex migrate:latest
    ```

5.  **Inicie a aplicação em modo de desenvolvimento:**

    ```bash
    npm run dev
    ```

A API estará disponível em `http://localhost:3333`.

## Como Executar os Testes

Para executar a suíte de testes automatizados, utilize o seguinte comando:

```bash
npm test
```

Os testes garantem que todas as funcionalidades da API estão operando conforme o esperado.
