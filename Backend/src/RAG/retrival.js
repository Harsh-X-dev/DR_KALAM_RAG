import index from "../config/pincone.js";
import { createEmbedding } from "./createEmbedding.js";
export const retrival = async (message) => {
  try {
    const vector = await createEmbedding(message)

    const result = await index.query({
        topK:10,
        vector,
        includeMetadata: true
    });

    return result
  } catch (err) {
    console.error(err);
  }
};
