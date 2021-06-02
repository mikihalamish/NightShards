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
    password: 'Bsmch@500K!',
    port: 5432,
});

app.get('/connect', (req, res) => {

    client.connect((err) => {
        if (err)
            console.log("Connection Error -> " + err)
        else
            console.log("DB Connected Successfully")
    })


    res.send("Check Console")
})

app.get('/create', (req, res) => {
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
        } else {
            console.error("Table Created Successfully")
            client.end();
        }
    });
    res.send("Check Console")
})

const server = app.listen(8080, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
