require('dotenv-defaults').config()
const { Client } = require('@elastic/elasticsearch');
const createAwsElasticsearchConnector = require('aws-elasticsearch-connector');
const AWS = require('aws-sdk')
const { exit } = require('process')

const awsConfig = new AWS.Config({
    // Your credentials and settings here, see
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  })

const client = new Client({
    ...createAwsElasticsearchConnector(awsConfig),
  node: process.env.AWS_ES_URL,
});

var typeObj = {
    Tname:"TeaCname",
    Cname:"CouName",
}

client.search({
    index: 'courseinfos',
    size: 50,
    body: {
        query:{
            multi_match: {
                query: "中華民國",
                fields: [ typeObj['Cname']],
            }
        }
    }
})
.then(res => console.log(res.body.hits.hits))
.catch(error => console.log(error.meta.body.error));