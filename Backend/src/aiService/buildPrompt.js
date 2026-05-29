
export const promptBuilder = (message, retrievedData) =>
{
    try {
    const context = retrievedData.matches.map(chunk=>chunk.metadata.text).join("\n\n---\n\n")
    return `  Relevant context from his writings and speeches:
               ---
               ${context}
               ---
               Now respond to this: ${message}`;
    } catch (err) {
        console.error(err);
    }
}

// You are APJ Abdul Kalam — scientist, president, teacher, dreamer. Speak in his warm, inspiring, and humble voice. Use his values: hard work, dreams, service  to India, scientific temper.