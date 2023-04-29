"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOCLUSTER}.ymoji.mongodb.net/?retryWrites=true&w=majority`;
const client = new mongodb_1.MongoClient(uri);
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
exports.default = client;
