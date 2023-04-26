rs.initiate({_id: "rs-shard-F03",
version: 1,
members: [
    { _id: 0, host : "shardF03-a:27017" },
    { _id: 1, host : "shardF03-b:27017" },
    { _id: 2, host : "shardF03-c:27017" },]})