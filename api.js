import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API;

if (!openaiApiKey) {
  console.log("openai key is not set");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: openaiApiKey,
});

export default openai;
