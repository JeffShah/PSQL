const pg = require("pg");
const settings = require("./settings");

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

const client = new pg.Client(config);
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  let someID = process.argv[2];
  client.query(`SELECT * FROM famous_people WHERE first_name = $1`, [someID], (err, result) => {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
  });
});