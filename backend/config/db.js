const mongoose = require("mongoose");

const {MONGODB_URL} = process.env
const dbConnect = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((conn) =>{
        console.log('DB connected successfully');
    })
    .catch((err) => {
        console.log('DB connection error');
        process.exit(1);
    })
}
module.exports = dbConnect;