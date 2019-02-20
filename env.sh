ENV=$1;
if [ ! -z $ENV ] && [ -f $ENV ]
then
  shift;
  CMD="env $(cat $ENV | egrep -v "(^#.*|^$)")";
else 
  echo 'Environment file is not found';
  exit 1;
fi

CMD="$CMD docker-compose -p $ENV";

if [ -z "$1" ]
then
  $CMD up --build --force-recreate
else
  $CMD $@
fi
