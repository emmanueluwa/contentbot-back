import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 8000;

app.get("/health", (req, res) => {
  res.send("healthy :)");
});

app.listen(port, () => {
  console.log(`listening on port ${port} :)`);
});
