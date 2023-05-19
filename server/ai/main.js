import { PineconeClient } from "@pinecone-database/pinecone";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import * as dotenv from "dotenv";
import { createPineconeIndex } from "./pineconeIndex.js";
import { updatePinecone } from "./pineconeUpdate.js";
import { queryPinecone } from "./pineconeQuery.js";
// Load environment variables
dotenv.config();
// Set up DirectoryLoader to load documents from the ./documents directory
const loader = new DirectoryLoader("./documents", {
  ".txt": (path) => new TextLoader(path),
  ".pdf": (path) => new PDFLoader(path),
  ".csv": (path) => new CSVLoader(path),
});
const docs = await loader.load();

/*********************ASK QUESTION HERE**************************************/

const question =
  "List all consoles available at target? list them in a table format, by price.";
  
/*********************ASK QUESTION HERE*************************************/

const indexName = "test-pine";
const vectorDimension = 1536;
// Initialize Pinecone client with API key and environment
const client = new PineconeClient();
await client.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});

// Run the main async function
(async () => {
  // Check if Pinecone index exists and create if necessary
  await createPineconeIndex(client, indexName, vectorDimension);
  // Update Pinecone vector store with document embeddings
  //   await updatePinecone(client, indexName, docs);
  // Query Pinecone vector store and GPT model for an answer
  await queryPinecone(client, indexName, question);
})();
