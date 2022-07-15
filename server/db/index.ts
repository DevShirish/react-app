import * as path from "path";
import fs from "fs";
import createConnectionPool, { ConnectionPool } from "@databases/mysql";
import initQuery from "./initQuery";

export class DBManager {
  conn: ConnectionPool;
  constructor() {
    this.conn = createConnectionPool({
      connectionString: `server=${process.env.DB_HOST};uid=${process.env.DB_USER};pwd=${process.env.DB_PASSWORD}`,
    });
    this.conn.query(initQuery).then(() => {
      console.log("database created");
    });
  }

  getConnection() {
    return this.conn;
  }
}
export default new DBManager();
