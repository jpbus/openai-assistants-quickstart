import { useState } from "react";

const AssistantIdInput = ({ onAssistantIdChange }) => {
  const [assistantId, setAssistantId] = useState("");

  const handleChange = (event) => {
    const newAssistantId = event.target.value;
    setAssistantId(newAssistantId);
    onAssistantIdChange(newAssistantId);
  };

  return (
    <div>
      <label htmlFor="assistant-id">Assistant ID:</label>
      <input
        type="text"
        id="assistant-id"
        value={assistantId}
        onChange={handleChange}
      />
    </div>
  );
};

export default AssistantIdInput;
