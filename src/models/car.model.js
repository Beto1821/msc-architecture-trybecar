const camelize = require('camelize');
const connection = require('./connection');

const insert = async (car) => {
  const [{ insertId }] = await connection.execute(
  'INSERT INTO cars (model, color, license_plate) VALUE (?, ?, ?)',
  [car.model, car.color, car.licensePlate],
  );

  return insertId;
};

const findById = async (carId) => {
  const [[result]] = await connection.execute(
  'SELECT * FROM cars WHERE id = ?',
  [carId],
  );

 return camelize(result);
};

module.exports = {
  insert,
  findById,
};