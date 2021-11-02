import Knex from "knex";

const config = {
  client: "cockroachdb",
  connection: {
    user: "<user>",
    password: "<password>",
    database: "<cluster>.defaultdb",
    host: "free-tier.<region>.cockroachlabs.cloud",
    port: 26257,
    ssl: {
      ca: fs.readFileSync(process.env.HOME+'/.postgresql/root.crt').toString()
    },
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
