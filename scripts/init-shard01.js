rs.initiate({_id: "rs-shard-F01",
 version: 1,
  members: [ 
    { _id: 0, host : "shardF01-a:27017" }, 
    { _id: 1, host : "shardF01-b:27017" }, 
    { _id: 2, host : "shardF01-c:27017" }, ] })