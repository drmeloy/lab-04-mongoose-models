const Lightsaber = require('./Lightsaber');

describe('Lightsaber', () => {
  describe('color', () => {
    it('requires a color', () => {
      const lightsaber = new Lightsaber({
        owner: 'Luke Skywalker',
        numBlades: 1
      });

      const { errors } = lightsaber.validateSync();
      expect(errors.color.message).toEqual('Path `color` is required.');
    });
  });

  describe('owner', () => {
    it('requires an owner', () => {
      const lightsaber = new Lightsaber({
        color: 'green',
        numBlades: 1
      });

      const { errors } = lightsaber.validateSync();
      expect(errors.owner.message).toEqual('Path `owner` is required.');
    });
  });

  describe('numBlades', () => {
    it('requires numBlades', () => {
      const lightsaber = new Lightsaber({
        color: 'green',
        owner: 'Luke Skywalker'
      });

      const { errors } = lightsaber.validateSync();
      expect(errors.numBlades.message).toEqual('Path `numBlades` is required.');
    });
  });
});
