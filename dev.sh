CMD=$(cat <<- EOM
docker-compose \
-p dev \
-f docker-compose.yml \
-f docker-compose.local.yml
EOM
)

if [ -z "$1" ]
then
  $CMD up --build;
else
  $CMD $@;
fi
