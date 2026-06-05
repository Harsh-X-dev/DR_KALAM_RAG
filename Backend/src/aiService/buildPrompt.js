export const promptBuilder = (message, retrievedData, previousMessages) => {
  try {
    const context = retrievedData.matches
      .slice(0, 5)
      .map((chunk) => chunk.metadata.text)
      .join("\n\n---\n\n");

    return `
CONTEXT:
${context}

PREVIOUS CONVERSATION:
${previousMessages || "No previous conversation."}

USER MESSAGE:
${message}

Instructions:
- Use the context when it is relevant to the user's question.
- If the user is greeting you or making casual conversation, respond naturally and briefly.
- Do not summarize all of the context.
- Answer only what the user asked.
- If the answer is not available in the context, say so clearly.
`;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
