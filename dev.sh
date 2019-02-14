CMD=$(cat <<- EOM
docker-compose \
-p dev \
-f docker-compose.yml \
-f docker-compose.local.yml
EOM
)
ARG1=$1;

if [ -z $ARG1 ]
then
  $CMD up --build
elif [ $ARG1 = "up" ]
then
  shift;
  $CMD $ARG1 --build $@
else
  $CMD $@
fi
