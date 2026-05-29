import "dotenv/config";
import app from "./src/app.js";
import db from "./src/config/prisma.js";
// import { testFun } from "./src/controller/chat.controller.js"; 
import { promptBuilder } from "./src/aiService/buildPrompt.js";

db.$connect()
  .then(() => {
    console.log("Connected to the database successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const PORT = process.env.PORT || 3000;

// import { retrival } from "./src/RAG/retrival.js";
// import { createEmbedding } from "./src/RAG/createEmbedding.js";
// const embedding = await createEmbedding("what is slv")
// // console.log(embedding)
// console.dir(embedding, { maxArrayLength: null });

// const data = await retrival(embedding);

// console.log(data);

// testFun(`how you felt when you were makin the atom bomb for India?`);
// // console.log( promptBuilder());

