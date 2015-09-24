var frisby=require('frisby');
var config = require('../config.js');

var batchid = config.batchid
var entryid = config.entryid

var City = ""
var Country = ""
var Street = ""
var Zip = ""

frisby.create('Post load via "/batch/{batch ID}/{entry ID}" API for the City, Country, Street, Zip fields without setting any values and Verify.')
  .post(config.host+'/batch/'+batchid+"/"+entryid, {
  	"City": City,
    "Country": Country,
    "Street": Street,
    "Zip": Zip,
 	}, {json: true})
 	.inspectBody()
.toss()