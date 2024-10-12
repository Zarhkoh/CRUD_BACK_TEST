module.exports = {
  HOST: process.env.PGHOST || "localhost",
  USER: process.env.PGUSER || "postgres",
  PASSWORD: process.env.PGPASSWORD || "root",
  DB: process.env.PGDATABASE || "testdb",
  PORT: process.env.PGPORT || 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
