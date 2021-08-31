import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbHost = process.env.DB_HOST;
const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@localhost:${dbHost}/${dbName}`
);
export default sequelize;
