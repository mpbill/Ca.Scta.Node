let fs = require('fs');
let path = require('path');
let buildSchema = require("graphql").buildSchema;
const schemaText = fs.readFileSync(path.resolve(__dirname,"schema.gql"),'utf8');
const schema = buildSchema(schemaText);
module.exports=schema;