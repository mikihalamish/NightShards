const { Client } = require('pg');

console.log()

const client = new Client({
    user: 'ron',
    host: '172.30.247.63',
    database: 'demodb',
    password: 'Devops@500K!',
    port: 5432,
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Empty (But working) Web Page")
});

app.get('/connect', (req, res) => {

    let result = ""

    client.connect().catch((err) => {
        result = false
    })

    if (result) {
        const query = `
        CREATE TABLE users (
            firstName varchar,
            lastName varchar,
            age int
            );
            `;

        client.query(query, (err, res) => {
            if (err) {
                console.error("DB Error -> " + err);
                result = "ERROR: " + err
            } else {
                result = "Table Created Successfully"
                client.end();
            }
        });
    } else {
        result = "Error Connecting DB"
    }

    res.send(result)
})

const server = app.listen(8080, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
