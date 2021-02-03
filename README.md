# READIT clone

## Utilizing

- Next.js
- TypeScript
- Postgres
- Express
- typeORM

### Steps to setup this project:

1. Run `npm i` command
2. Setup database settings inside `example.ormconfig.json` file
3. Rename `example.ormconfig.json` to `ormconfig.json`
4. Run `npm start` command

## To run:

npm run dev
check routes in Postman:

- post http://localhost:5000/api/auth/register

  {
  "uesrname": ,
  "user": ,
  "password":
  }

- post http://localhost:5000/api/auth/login

  {
  "username": ,
  "password":
  }

- get http://localhost:5000/api/auth/me
- get http://localhost:5000/api/auth/logout
