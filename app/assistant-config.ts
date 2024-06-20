let assistantId = ""; // Default value

export const setAssistantId = (newAssistantId) => {
  assistantId = newAssistantId;
};

export const getAssistantId = () => {
  return assistantId;
};

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}