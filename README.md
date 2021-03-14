# READIT clone
postgres and client running on digital ocean.com
## Utilizing

- Next.js
- TypeScript
- Postgres
- Express
- typeORM

## Steps to setup this project locally:

1. Run `npm i` 
2. Setup database settings inside "example.ormconfig.json" file
3. Rename "example.ormconfig.json" to "ormconfig.json"
4. Run `npm run dev` 
5. Run `cd client/ & npm i && npm run dev`


## Setup database (in docker)
### Install postgres image for docker
`docker pull postgres`

### Builds container using postgress
`docker run --name postgres-docker -e POSTGRES_PASSWORD=root -d -p 4321:5432 postgres`

<!-- ### TO ACCESS: connects to new container 
`docker exec -it postgres-docker psql -U postgres -->

### Replace ".env.example" content with:
PORT=5000
NODE_ENV=development
APP_URL=http://localhost:5000
ORIGIN=http://localhost:3000

JWT_SECRET=4hjkf45088756ds7ftg45jkh0

DB_DIALECT=postgres
DB_PORT=4321
DB_HOST=localhost
DB_USERNAME=postgres
DB_PASSWORD=root
DB_DATABASE=postgres

### Rename:
".env.example" to ".env" 
