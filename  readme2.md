Step 1 :point_right Step 1: Start all of the containers
sh ./scripts/build.sh
_____________________________________________________________

Step 2: Initialize the replica sets (config servers and shards)

docker compose exec configsvr01 sh -c "mongosh < /scripts/init-configserver.js"

docker compose exec shard01-a sh -c "mongosh < /scripts/init-shard01.js"

docker compose exec shard02-a sh -c "mongosh < /scripts/init-shard02.js"
docker compose exec shard03-a sh -c "mongosh < /scripts/init-shard03.js"

_____________________________________________________________

//Step 3: Initializing the router 
docker compose exec router01 sh -c "mongosh < /scripts/init-router.js"

_____________________________________________________________

Step 4: Enable sharding and setup sharding-key

docker compose exec router01 mongosh --port 27017

// Enable sharding for database `MyDatabase`
sh.enableSharding("MyDatabase")

// Setup shardingKey for collection `MyCollection`**
db.adminCommand( { shardCollection: "MyDatabase.MyCollection", key: { oemNumber: "hashed", zipCode: 1, supplierId: 1 } } )
______________________________________________________


docker-compose exec router01 mongosh --port 27017
sh.status()