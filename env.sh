
ENV=$1;
if [ -n $ENV ] && [ -r $ENV ]
then
  shift;
  CMD="env $(cat $ENV | egrep -v "(^#.*|^$)")"
else 
  echo 'Environment file not found';
  exit 1;
fi

CMD="$CMD docker-compose -p $ENV"
ARG1=$1;

if [ -z $ARG1 ]
then
  echo $CMD;
  $CMD up --build --force-recreate
elif [ $ARG1 = "up" ]
then
  shift;
  $CMD $ARG1 --build --force-recreate $@
else
  $CMD $@
fi
