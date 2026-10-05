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

O projeto utiliza Git e GitHub para controle de versões e organização do desenvolvimento.

A estratégia de branches segue a estrutura do GitFlow:

- `main`: mantém as versões estáveis do projeto.
- `develop`: utilizada para integração das alterações durante o desenvolvimento.
- `feature/`: utilizada para desenvolver alterações de forma isolada antes da integração com a branch `develop`.

Durante o desenvolvimento, foram utilizados commits semânticos para deixar o histórico mais claro, identificando o tipo e o objetivo de cada alteração.

As alterações de acessibilidade, por exemplo, foram desenvolvidas na branch `feature/acessibilidade` e registradas com o commit:

`fix: melhora acessibilidade da interface`

Após a implementação e os testes, foi aberto um Pull Request da branch `feature/acessibilidade` para a `develop`. Os arquivos modificados foram revisados antes da realização do merge.

O GitHub também foi utilizado para organizar o trabalho através de Issues e Milestones. A Issue #1 registrou as melhorias de acessibilidade e foi vinculada ao milestone `Acessibilidade e qualidade - v1.1.0`.

A primeira versão estável do projeto foi identificada através da tag `v1.0.0`, seguindo o conceito de versionamento semântico.

## Pré-requisitos

Para executar o projeto localmente, é necessário ter:

- Um navegador web moderno, como Google Chrome, Microsoft Edge ou Firefox.
- Um editor de código, como o Visual Studio Code.
- Um servidor local para executar a aplicação, como a extensão Live Server do Visual Studio Code.
- Git, caso o projeto seja obtido por meio da clonagem do repositório.

O projeto foi desenvolvido com HTML5, CSS3 e JavaScript ES6+ e não utiliza um gerenciador de pacotes, como npm. Por esse motivo, não é necessária a instalação de dependências por linha de comando.

A biblioteca SweetAlert2 é carregada diretamente pela aplicação através de CDN.

## Como executar o projeto

1. Clone ou baixe o repositório.
2. Abra a pasta do projeto em um editor de código, como o Visual Studio Code.
3. Execute o arquivo `HTML/index.html` utilizando um servidor local, como a extensão Live Server.
4. Utilize o menu de navegação para acessar as funcionalidades da aplicação.

## Build e testes

O projeto utiliza HTML5, CSS3 e JavaScript ES6+ diretamente no navegador, sem ferramentas de compilação ou empacotamento. Por esse motivo, não é necessário executar um comando de build para gerar a aplicação.

Os testes são realizados manualmente durante o desenvolvimento, verificando o funcionamento da navegação, dos formulários, da responsividade e das interações implementadas com JavaScript.

Também são realizadas verificações da estrutura HTML e CSS durante o desenvolvimento para identificar possíveis erros de marcação e estilização.

Atualmente, o projeto não possui uma suíte de testes automatizados.

## Autor

Aj-junior1

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Front-end para Web.