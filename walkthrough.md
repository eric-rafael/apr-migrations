Links:

Aulão de Migrations no Sequelize - 2021
https://www.youtube.com/watch?v=QOKk1PzGLeI


Comandos:

npm init -y
npm i dotenv sequelize mysql2
npx sequelize-cli init

LIGUE O BANCO DE DADOS E:
npx sequelize-cli db:create
npx sequelize-cli migration:generate --name create-clientes
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo <!-- desfaz -->
npx sequelize-cli migration:generate --name alter-clientes-telefone
npx sequelize-cli db:migrate