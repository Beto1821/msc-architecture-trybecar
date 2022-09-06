const sinon = require('sinon');
const { expect } = require('chai');

const { findAll } = require('../../../src/models/driver.model');
const connection = require('../../../src/models/connection');

describe('Driver Model', function () {
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