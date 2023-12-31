# Docker - Desafio 02
A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.</br>
O retorno da aplicação node.js para o nginx deverá ser:</br>
&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</br>
Lista de nomes cadastrada no banco de dados.</br>
Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.</br>
Suba tudo em um repositório e faça a entrega. </br>
A linguagem de programação para este desafio é Node/JavaScript.