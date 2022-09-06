const sinon = require('sinon');
const { expect } = require('chai');
const { driverModel } = require('../../../src/models/driver.model');
const connection = require('../../../src/models/connection');

describe('Driver Model', function () {
  describe('Lista todas as pessoas motoristas', function () {
    before(async function () {
      const execute = [{
          id: 1,
          name: 'Liana Cisneiros',
        },
        {
          id: 2,
          name: 'Fábio Frazão',
        },
      ];
  
      sinon.stub(connection, 'execute').resolves();
    });

    after(async function () {
      connection.execute.restore();
    });

    it('com o tipo array', async function () {
      const response = await driverModel.findAll();
      expect(response).to.be.a('array');
    });

    it('com sucesso', async function () {
      const expected = [
        {
          id: 1,
          name: 'Liana Cisneiros',
        }, 
        {
          id: 2,
          name: 'Fábio Frazão',
        },
      ];

      const response = await driverModel.findAll();

      expect(response).to.deep.equal(expected);
    });
  });
});