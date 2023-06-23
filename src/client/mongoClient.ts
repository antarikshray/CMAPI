import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOCLUSTER}.ymoji.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const setUpConnection = async () => {
    await client.connect();
    const database = client.db('CMAPI');
    const statesCollection = database.collection('state');
    return statesCollection;
}

export default client;
export { setUpConnection }