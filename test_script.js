const pg = require("pg");
const settings = require("./settings"); // settings.json
//console.log(pg);
//console.log(settings);

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
//console.log(client);
client.connect((err) => {
  //console.log(client.connect);
  if (err) {
    //console.log(err);
    return console.error("Connection Error", err);
  }
  client.query("SELECT $1::int AS number", ["1"], (err, result) => {
    console.log("SELECT $1::int AS number");
    //console.log(client.query);
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].number); //output: 1
    client.end();
    //console.log(client.end);
  });
});