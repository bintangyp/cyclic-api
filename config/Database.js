import { Sequelize } from "sequelize";

const db = new Sequelize("sql12610384", "sql12610384", "j5xq82Emie", {
  host: "sql12.freesqldatabase.com",
  port: "3306",
  dialect: "mysql",
});

export default db;
