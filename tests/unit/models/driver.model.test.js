const { expect } = require('chai');
const { driverModel } = require('../../../src/models');

  describe('Lista todas as pessoas motoristas', function () {
    it('com o tipo array', function () {
      const response = driverModel.findAll();
      expect(response).to.be.a('array');
    });

    it('com sucesso', function () {
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

      const response = driverModel.findAll();

      expect(response).to.deep.equal(expected);
    });
  });