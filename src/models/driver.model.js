const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
  'SELECT * FROM drivers',
  );

  return result;
};

const findById = async (driverId) => {
  const [[result]] = await connection.execute(
  'SELECT * FROM drivers WHERE id = ?',
  [driverId],
  );

  return result;
};

module.exports = {
  findAll,
  findById,
};