import express from "express";
import cors from "cors";
import generate from "./generate.js";

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.get("/api/health", (req, res) => {
  res.send("healthy :)");
});

app.post("/api/generate", async (req, res) => {
  const projectDescription = req.body.projectDescription;

  try {
    const tweet = await generate(projectDescription);

    res.json({ response: tweet });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port} :)`);
});
