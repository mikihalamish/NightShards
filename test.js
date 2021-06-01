const { Client } = require('pg');

console.log()

const client = new Client({
    user: 'devops',
    host: process.env.DB_ADD,
    database: 'sampledb',
    password: 'Devops@500K!',
    port: 5432,
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("MIKI !!!")
});

app.get('/connect', (req, res) => {

    client.connect()

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
            return;
        }
        console.log('Table is successfully created');
        client.end();
    });

})

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});