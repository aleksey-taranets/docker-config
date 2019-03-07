# Docker configuration example

The repository has an example configuration for docker with base services

- Frontend SPA
- Frontend SSR
- Backend
- Database (MongoDB)

Each service has docker files for the local and production environment.

## Run application

### Local environment

The environment uses a .env file

```sh
./dev.sh
```

Or you can run a single service (ex. only backend)

```sh
./dev.sh up backend
```

### Production/Staging/Testing environment

Run any environments

```sh
./env.sh .env.prod
```

```sh
./env.sh .env.stg
```
