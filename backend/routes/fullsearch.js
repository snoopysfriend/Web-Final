import express from 'express'
const router = express.Router()

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
    Tname:["TeaCname"],
    Cname:["CouName"],
    Course:["CouCont", "CouProg"]
}

router.get('/', function(req, res, next){
    // TODO use ssession to get the user
    
    const queryType = req.query.type
    const text = req.query.text

    console.log(`type =  ${queryType}`)
    console.log(`Query text = ${text}`)
    try{
        typeObj.queryType
    }catch{
        res.status(400).send({message: "bad type param"})
    }
    
    client.search({
        index: 'courseinfos',
        from: 0,
        size: 50,
        body: {
            query:{
                multi_match: {
                    query: text,
                    fields: typeObj[queryType],
                }
            }
        }
    })
    .then(results => {
        console.log(`Found ${results.body.hits.hits.length} docs`)
        res.status(200).send({message: "success", content: results.body.hits.hits})
    })
    .catch(
        error => {
        console.log(error.meta.body.error)
        res.status(500).send({message: "errors"})
    });
});

export default router
