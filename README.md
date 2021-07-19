# company-crud
CRUD feito em NodeJS

# Ambiente
1. Node 14.17.3 ou superior
2. npm 6.14.3 ou superior
3. PostgreSQL 13.3 ou superior

# Criando arquivo .env para carregar variáveis de ambiente
```bash
DB_HOST='host do banco'
DB_NAME='nome do banco que será usado'
DB_USER='usuário do banco'
DB_PORT='porta do banco'
DB_PASS='senha do banco'
BASE_PATH='path base da API como /api por exemplo'
BASE_HOST='host da API para aparecer no swagger'
PORT='porta da aplicação'
NODE_ENV='ambiente que a API esta rodando'
DB_DIALECT='dialeto passado para o sequelize, atualmente usando postgres'
CEP_API='API para consulta de cep, foi usado viacep para esta API'
```

# Passos para rodar
Criar arquivo .env com para poder conectar no banco

Rodar um 
```bash
npm install
```

Criar as tabelas e preencher as tabelas de dominio com o comando abaixo
```bash
npx sequelize db:migrate 
npx sequelize db:seed
```

Para iniciar a API basta rodar
```bash
npm run dev
```

# Rodando os testes
```bash
npm test
```