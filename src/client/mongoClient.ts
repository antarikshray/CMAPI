import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOCLUSTER}.ymoji.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

// const run = async () =>{
//     try {
//         const database = client.db('CMAPI');
//         const movies = database.collection('state');
//         const query = { state: 'Assam' };
//         const movie = await movies.findOne(query);
//         console.log(movie);
//     } finally {
//         await client.close();
//     }
// }

export default client;