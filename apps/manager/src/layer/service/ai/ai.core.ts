import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import * as hub from "langchain/hub";

// need ai tool
// 1. html to list content
// 2. html to detail content
// 3. 기사 작성
let modelIdx = 0;
const model = [
  new ChatGoogleGenerativeAI({
    modelName: "gemini-1.5-flash",
    //   maxOutputTokens: 2048,
    apiKey: process.env.GEMINI_API_KEY,
  }),
  new ChatGoogleGenerativeAI({
    modelName: "gemini-1.5-flash",
    //   maxOutputTokens: 2048,
    apiKey: process.env.GEMINI_API_KEY2,
  }),
];

// Define the function that determines whether to continue or not
function shouldContinue({ messages }: typeof MessagesAnnotation.State) {
  console.log(messages);
  return "__end__";
}

// Define the function that calls the model
async function callModel(state: typeof MessagesAnnotation.State) {
  const response = await model[modelIdx++ % 2]?.invoke(state.messages);
  // We return a list, because this will get added to the existing list
  return { messages: [response] };
}

// Define a new graph
const workflow = new StateGraph(MessagesAnnotation)
  .addNode("agent", callModel)
  .addEdge("__start__", "agent") // __start__ is a special name for the entrypoint
  .addConditionalEdges("agent", shouldContinue);

// Finally, we compile it into a LangChain Runnable.
const app = workflow.compile();

export async function postUserMessageToAI({
  userMessage,
  promptName = "gemini-ver2",
}: { userMessage: string; promptName?: string }): Promise<string> {
  try {
    const promptTemplate = await hub.pull(promptName);

    const prompt = await promptTemplate.invoke({ question: userMessage });
    const res = await app.invoke(prompt);
    const messages = res.messages;
    const lastMessage = messages[messages.length - 1]?.content;
    if (lastMessage && !Array.isArray(lastMessage)) {
      return lastMessage;
    }
    throw new Error("created ai content has type mistake.");
  } catch (error) {
    console.error(error);
  }
  return "";
}
