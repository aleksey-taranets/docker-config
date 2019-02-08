env $(cat prod.env | egrep -v "(^#.*|^$)") \
docker-compose \
  -p ProdEnv \
  up --build --force-recreate $@