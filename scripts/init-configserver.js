rs.initiate({_id: "rs-config-Fserver", 
configsvr: true, 
version: 1,
 members: [ 
     { _id: 0, host : 'configsvrF01:27017' },
     { _id: 1, host : 'configsvrF02:27017' }, 
     { _id: 2, host : 'configsvrF03:27017' } ] })