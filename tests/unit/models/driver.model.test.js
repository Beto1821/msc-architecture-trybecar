const sinon = require('sinon');
const { expect } = require('chai');

const { findAll } = require('../../../src/models/driver.model');
const connection = require('../../../src/models/connection');

describe('Driver Model', function () {
  describe('Lista todas as pessoas motoristas', function () {
        before(async function () {

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
  });

      it('Array drives', async function () {
      const response = await findAll();
      expect(response).to.be.a('array');
    });

    afterEach(sinon.restore);
});