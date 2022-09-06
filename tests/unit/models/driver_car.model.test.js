const sinon = require('sinon');
const { expect } = require('chai');

const { insert } = require('../../../src/models/driver_car.model');
const connection = require('../../../src/models/connection');

describe('Exercicio 6', function () {
  describe('Cadastra o relacionamento das pessoas motoristas com os carros', function () {
    before(async function () {
      const execute = { insertId: 1 };

      sinon.stub(connection, 'execute').resolves([execute]);
    });
  
    after(async function () {
      connection.execute.restore();
    });

    it('com sucesso', async function () {
      const expected = 1;

      const payload = {
        driverId: 3,
        carId: 1,
      };

      const response = await insert(payload);

      expect(response).to.equal(expected);
    });
  });
});