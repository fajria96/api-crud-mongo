const { MongoClient } = require("mongodb");

const url = 'mongodb://fajriatun:hHIQ7azDPSh7yufM@ac-9xvgiaf-shard-00-00.dew2u1j.mongodb.net:27017,ac-9xvgiaf-shard-00-01.dew2u1j.mongodb.net:27017,ac-9xvgiaf-shard-00-02.dew2u1j.mongodb.net:27017/eduwork?ssl=true&replicaSet=atlas-mdm299-shard-0&authSource=admin&retryWrites=true&w=majority';
const client = new MongoClient(url);

(async () => {
  try {
    await client.connect();
    console.log("Koneksi ke mongodb berhasil");
  } catch (e) {
    console.log(e);
  }
})();

const db = client.db("eduwork");
module.exports = db;
