const { Client } = require('pg');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Empty (But working) Web Page")
});

const client = new Client({
    user: 'ron',
    host: '172.30.247.63',
    database: 'demodb',
    password: 'Devops@500K!',
    port: 5432,
});

app.get('/connect', (req, res) => {

    let result = true

    client.connect((err) => {
        result = err
        console.log("Connection Error -> " + err)
    })

    /*  if (result == true) {
         const query = `
         CREATE TABLE users (
             firstName varchar,
             lastName varchar,
             age int
             );
             `;
 
         client.query(query, (err, res) => {
             if (err) {
                 console.error("Creating DB Table Error -> " + err);
                 result = "ERROR: " + err
             } else {
                 result = "Table Created Successfully"
                 client.end();
             }
         });
     } */

    res.send(result)
})

const server = app.listen(8080, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
