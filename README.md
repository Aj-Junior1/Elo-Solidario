# Elo Solidário

Projeto desenvolvido durante a disciplina de Desenvolvimento Front-end para Web do curso de Análise e Desenvolvimento de Sistemas.

A Elo Solidário é uma plataforma web criada para representar uma organização social fictícia voltada para ações de solidariedade, doações e trabalho voluntário.

## Objetivo

O projeto tem como objetivo aplicar na prática os conhecimentos adquiridos durante a disciplina, evoluindo desde a criação da estrutura HTML até a implementação de uma aplicação interativa com JavaScript.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Git e GitHub
- SweetAlert2
- LocalStorage

## Funcionalidades

- Navegação no formato Single Page Application (SPA)
- Navegação entre conteúdos através de rotas por hash
- Exibição dinâmica dos projetos
- Formulário de cadastro com validação
- Feedback visual durante o preenchimento dos campos
- Armazenamento e recuperação de dados com LocalStorage
- Alertas utilizando SweetAlert2
- Layout responsivo
- JavaScript organizado com ES6 Modules

## Estrutura do projeto

Elo-Solidario/

- CSS/
  - styles.css
- HTML/
  - index.html
  - projetos.html
  - cadastro.html
- IMAGENS/
  - arquivos de imagens utilizados no projeto
- JS/
  - main.js
  - modules/
    - formulario.js
    - projetos.js
    - storage.js
    - templates.js

## Organização do JavaScript

O JavaScript foi dividido em módulos para separar as responsabilidades da aplicação.

O arquivo `main.js` funciona como ponto de entrada da aplicação e controla a navegação principal.

Os arquivos da pasta `modules` separam funcionalidades relacionadas aos projetos, templates da interface, formulário e armazenamento de dados.

A comunicação entre os módulos é realizada utilizando `import` e `export`.

## Versionamento

O projeto utiliza Git e GitHub para controle de versões.

A estratégia de branches segue a estrutura do GitFlow:

- `main`: versão estável do projeto.
- `develop`: branch utilizada para integração do desenvolvimento.
- `feature/`: branches destinadas ao desenvolvimento isolado de novas funcionalidades.

## Como executar o projeto

1. Clone ou baixe o repositório.
2. Abra a pasta do projeto em um editor de código, como o Visual Studio Code.
3. Execute o arquivo `HTML/index.html` utilizando um servidor local, como a extensão Live Server.
4. Utilize o menu de navegação para acessar as funcionalidades da aplicação.

## Autor

Aj-junior1

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Front-end para Web.