const { Client } = require('pg');

console.log()

const client = new Client({
    user: 'devops',
    host: process.env.DB_ADD,
    database: 'sampledb',
    password: 'Devops@500K!',
    port: 5432,
});

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