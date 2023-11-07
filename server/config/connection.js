const {
    connect, connection
} = require('mongoose');
connect(process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/travel-log');
module.exports = connection