import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "todo", // database name
  "user", // database username
  "password", // database password
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

// Check if connection is successfull
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfull.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database: ", err);
  });

export default sequelize;
