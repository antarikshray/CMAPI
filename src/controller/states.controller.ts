import client from "../client/mongoClient";


const allStates = async () => {
  try {
    await client.connect();
    const database = client.db('CMAPI');
    const statesCollection = database.collection('state');
    const states = await statesCollection.find({}).toArray();
    return states;
  } catch(err) {
    return err;
  } finally {
    await client.close();
  }
};

export { allStates };
