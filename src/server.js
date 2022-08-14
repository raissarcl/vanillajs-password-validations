import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, console.log("Server's running at: http://localhost:3000"));