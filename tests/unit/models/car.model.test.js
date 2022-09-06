const sinon = require('sinon');
const { expect } = require('chai');

const { insert, findById } = require('../../../src/models/car.model');
const connection = require('../../../src/models/connection');

describe('Ewercicio 2', function () {
  describe('Cadastra um novo carro', function () {
    before(async function () {
      const execute = { insertId: 1 };

      sinon.stub(connection, 'execute').resolves([execute]);
    });

    after(async function () {
      connection.execute.restore();
    });

    const expected = 1;

    const payload = {
      model: 'Renault Sandero',
      color: 'Branco',
      licensePlate: 'NCA-0956',
    };

    it('com sucesso', async function () {
      const response = await insert(payload);

      expect(response).to.equal(expected);
    });
  });
});

describe('Exercicio 3', function () {
  describe('Encontra um carro pelo id', function () {
    before(async function () {
      const execute = [
        {
          id: 2,
          model: 'Volkswagen Gol',
          color: 'Vermelho',
          license_plate: 'DZG-4376',
        },
      ];
  
      sinon.stub(connection, 'execute').resolves([execute]);
    });
  
    after(async function () {
      connection.execute.restore();
    });

    const expected = {
      id: 2,
      model: 'Volkswagen Gol',
      color: 'Vermelho',
      licensePlate: 'DZG-4376',
    };

    const payload = 2;

    it('com sucesso', async function () {
      const response = await findById(payload);

      expect(response).to.deep.equal(expected);
    });
  });
});