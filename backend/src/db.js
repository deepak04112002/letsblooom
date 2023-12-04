const { connect } = require("mongoose");

const connectDb = async (letsbloom) => {
  return connect('mongodb+srv://user:user@letsbloom.qqxilip.mongodb.net/', { dbName: letsbloom });
}

module.exports = { connectDb };
