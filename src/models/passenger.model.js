const camelize = require('camelize');
const connection = require('./connection');

const findById = async (passengerId) => {
const [[passanger]] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?',
    [passengerId],
  );
  return camelize(passanger);
};

module.exports = {
  findById,
};
