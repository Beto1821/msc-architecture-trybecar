const sinon = require('sinon');
const { expect } = require('chai');

const { findAll, findById, insert } = require('../../../src/models/driver.model');
const connection = require('../../../src/models/connection');

describe('Exercicio 1', function () {
  describe('Lista todas as pessoas motoristas', function () {
        before(function () {

      const mock= [{
          id: 1,
          name: 'Liana Cisneiros',
        },
        {
          id: 2,
          name: 'Fábio Frazão',
        },
      ];
  
      sinon.stub(connection, 'execute').resolves([mock]);

  });
      after(async function () {
      connection.execute.restore();
    });

      it('Array drives', async function () {
      const response = await findAll();
      expect(response).to.be.a('array');
    });

      it('com sucesso', async function () {
      const mock = [
        {
          id: 1,
          name: 'Liana Cisneiros',
        }, 
        {
          id: 2,
          name: 'Fábio Frazão',
        },
      ];

      const response = await findAll();
      expect(response).to.deep.equal(mock);
    });
  });
});

describe('Exercicio 4', function () {
  describe('Encontra uma pessoa motorista pelo id', function () {
    before(async function () {
      const execute = [
        {
          id: 2,
          name: 'Fábio Frazão',
        },
      ];

      sinon.stub(connection, 'execute').resolves([execute]);
    });
  
    after(async function () {
      connection.execute.restore();
    });

    const expected = {
      id: 2,
      name: 'Fábio Frazão',
    };

    const payload = 2;

    it('com sucesso', async function () {
      const response = await findById(payload);

      expect(response).to.deep.equal(expected);
    });
  });
});

describe('Exercicio 5', function () {
  describe('Cadastra uma pessoa motorista', function () {
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
        name: 'Liana Cisneiros',
      };

      const response = await insert(payload);

      expect(response).to.equal(expected);
    });
  });
});