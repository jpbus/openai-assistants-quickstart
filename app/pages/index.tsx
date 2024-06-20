import { useState } from "react";
import AssistantIdInput from "@/components/AssistantIdInput";

const HomePage = () => {
  const [assistantId, setAssistantId] = useState("");

  const handleAssistantIdChange = (newAssistantId) => {
    setAssistantId(newAssistantId);
  };

  return (
    <div>
      <h1>Welcome to the Assistant App</h1>
      <AssistantIdInput onAssistantIdChange={handleAssistantIdChange} />
      {/* Other components and logic */}
    </div>
  );
};

export default HomePage;
