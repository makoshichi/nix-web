# nix-web

-> Repositório 2: Front-End desenvolvido em AngularJS no Visual Studio 2019

Primeira experiência com AngularJS. 

Para possibilitar a execução da API back-end e do front-end web na mesma máquina, este está configurado para rodar no IIS Local (ao passo que a API roda através do IIS Express).

Execução:
- Abrir Visual Studio com privilégios de administrador
- Abrir as configurações do projeto NixWeb (csproj) e na aba "Web", clicar em "Create Virtual Directory"
- O front-end web será hospedado no campo de texto nesta mesma aba (padrão: http://localhost/NixWeb)
- A aplicação web está enviando requisições para http://localhost:44326, aonde a API está configurada para rodar

OBS: versão npm: 6.14.13
