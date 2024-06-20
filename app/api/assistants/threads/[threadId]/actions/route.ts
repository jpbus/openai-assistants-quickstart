import { getAssistantId } from "@/app/assistant-config";
import { openai } from "@/app/openai";

// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
  const { toolCallOutputs, runId } = await request.json();
  const assistantId = getAssistantId();

  const stream = openai.beta.threads.runs.submitToolOutputsStream(
    threadId,
    runId,
    { tool_outputs: toolCallOutputs }
  );

  return new Response(stream.toReadableStream());
}

