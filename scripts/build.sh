NETWORK_NAME=shardingf
if [ -z $(docker network ls --filter name=^${NETWORK_NAME}$ --format="{{ .Name }}") ] ; then 
     docker network create ${NETWORK_NAME} ; 
fi

docker compose -f docker-compose.yaml up -d