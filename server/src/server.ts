import app from "./app";
import database from "./database/database";
import { chalk_succes } from "./utils/log";
import { config } from "dotenv";

// ========== Environment Variables ==========
const PORT: number = Number(process.env.PORT) || 3000;
config();
// ========== Database ==========
database();
// ========== Server ==========
console.log(process.env.API_PREFIX);
app.listen(PORT, () =>
  console.log(chalk_succes(`Server running on port ${PORT}`))
);
