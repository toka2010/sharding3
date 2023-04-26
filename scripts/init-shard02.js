rs.initiate({ _id: "rs-shard-F02", 
version: 1,
members: [         
    { _id: 0, host : "shardF02-a:27017" },         
    { _id: 1, host : "shardF02-b:27017" },		 
    { _id: 2, host : "shardF02-c:27017" },      ]   })