const MongoURL = process.env.MONGODB_URI;
if (!MongoURL) {
    throw new Error("MongoDB URL is missing. Please set the MONGODB_URL environment variable.");
}
export default MongoURL;