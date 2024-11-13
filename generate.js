import openaiClient from "./api.js";

const prompt = `Given a detailed description of the user's application, generate a 140-character tweet that would effectively promote the project and attract interaction on Twitter. The tweet should:

Briefly summarize the key features and benefits of the application in a concise and compelling way.
Use relevant hashtags to increase visibility and discoverability.
Include a call-to-action that encourages users to try the application or learn more about it.
Utilize creative language, emojis, or other elements to make the tweet visually appealing and eye-catching.
Convey a sense of excitement and enthusiasm about the application to spark interest and engagement from the Twitter audience.
Consider the target audience and tailor the tone and messaging accordingly.
Refrain from making unsupported claims or using misleading language.
Proofread the tweet for spelling and grammar before providing the final output. In ENGLISH only.
`;

const generate = async (projectDescription) => {
  const response = await openaiClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: projectDescription },
    ],
    max_tokens: 100,
    temperature: 1.8, //highest creativity(2)
  });

  return response.choices[0].message.content;
};

export default generate;
