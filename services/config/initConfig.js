import { connection } from "../../db/index.js";

export default function initConfig(request, response, next) {
  connection.query(`
    INSERT INTO table2
    SELECT * FROM users
  `);
  response.status("200").send("hello");
}
