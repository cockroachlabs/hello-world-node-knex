import Knex from "knex";

const config = {
  client: "cockroachdb",
  connection: {
    user: "root",
    password: "",
    database: "bank",
    host: "localhost",
    port: 26257,
    ssl: false,
  },
  migrations: {
    directory: "migration/migrations",
  },
  seeds: {
    directory: "migration/seeds",
  },
};

(async () => {
  // Connect to database
  try {
    const client = Knex(config);
    await client.raw("SELECT 1");
    console.log("Hey! You successfully connected to your CockroachDB cluster.");
  } catch (err) {
    console.log(`error connecting: ${err}`);
  }

  // Exit program
  process.exit();
})().catch((err) => console.log(err.stack));
