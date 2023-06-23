import { ObjectId } from "mongodb";
import client, { setUpConnection } from "../client/mongoClient";


const allStates = async () => {
  try {
    const statesCollection = await setUpConnection();
    const states = await statesCollection.find({}).toArray();
    return states;
  } catch (err) {
    return err;
  } finally {
    await client.close();
  }
};

const getByStateID = async (stateID: string) => {
  try {
    const statesCollection = await setUpConnection();
    const state = await statesCollection.findOne({ "_id": new ObjectId(stateID) });
    return state;
  } catch (err) {
    return err;
  } finally {
    await client.close();
  }
};

export { allStates, getByStateID };
