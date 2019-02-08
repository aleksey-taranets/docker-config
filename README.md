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
./run_dev.sh
```

Or you can run a single service (ex. only backend)

```sh
./run_dev.sh backend
```

### Production environment

The environment uses a prod.env file

```sh
./run_prod.sh
```
