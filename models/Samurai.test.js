const Samurai = require('./Samurai');

describe('Samurai', () => {
  describe('name', () => {
    it('requires a name', () => {
      const samurai = new Samurai({
        age: 18,
        swordName: 'Betty',
        hasBow: false
      });

      const { errors } = samurai.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('age', () => {
    it('requires an age', () => {
      const samurai = new Samurai({
        name: 'Ryder',
        swordName: 'Betty',
        hasBow: false
      });

      const { errors } = samurai.validateSync();
      expect(errors.age.message).toEqual('Path `age` is required.');
    });
  });

  describe('swordName', () => {
    const samurai = new Samurai({
      name: 'Ryder',
      age: '20',
      hasBow: false
    });

    const { errors } = samurai.validateSync();
    expect(errors.swordName.message).toEqual('Path `swordName` is required.');
  });

  describe('hasBow', () => {
    const samurai = new Samurai({
      name: 'Ryder',
      age: '20',
      swordName: 'Mary'
    });

    const { errors } = samurai.validateSync();
    expect(errors.hasBow.message).toEqual('Path `hasBow` is required.');
  });
});
