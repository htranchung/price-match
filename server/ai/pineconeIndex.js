
export const createPineconeIndex = async (
  client,
  indexName,
  vectorDimension
) => {
  // Initiate index existence check
  console.log(`Checking "${indexName}"...`);
  // Get list of existing indexes
  const existingIndexes = await client.listIndexes();
  // If index doesn't exist, create it
  if (!existingIndexes.includes(indexName)) {
    // Log index creation initiation
    console.log(`Creating "${indexName}"...`);
    // Create index
    const createClient = await client.createIndex({
      createRequest: {
        name: indexName,
        dimension: vectorDimension,
        metric: "cosine",
      },
    });
    // Log successful creation
    console.log(`Created with client:`, createClient);
    // Wait 60 seconds for index initialization
    await new Promise((resolve) => setTimeout(resolve, 60000));
  } else {
    // Log if index already exists
    console.log(`"${indexName}" already exists.`);
  }
};
