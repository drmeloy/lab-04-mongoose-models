const Pirate = require('./Pirate');

describe('Pirate', () => {
  describe('name', () => {
    it('requires a name', () => {
      const pirate = new Pirate({
        numEyes: 1,
        numLegs: 1,
        numHands: 1,
        isCaptain: false
      });

      const { errors } = pirate.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('numEyes', () => {
    it('requires numEyes', () => {
      const pirate = new Pirate({
        name: 'One-Eyed Peg-Legged Hook-Hand',
        numLegs: 1,
        numHands: 1,
        isCaptain: false
      });
  
      const { errors } = pirate.validateSync();
      expect(errors.numEyes.message).toEqual('Path `numEyes` is required.');
    });
  });

  describe('numLegs', () => {
    it('requires numLegs', () => {
      const pirate = new Pirate({
        name: 'One-Eyed Peg-Legged Hook-Hand',
        numEyes: 1,
        numHands: 1,
        isCaptain: false
      });
  
      const { errors } = pirate.validateSync();
      expect(errors.numLegs.message).toEqual('Path `numLegs` is required.');
    });
  });

  describe('numHands', () => {
    it('requires numHands', () => {
      const pirate = new Pirate({
        name: 'One-Eyed Peg-Legged Hook-Hand',
        numEyes: 1,
        numLegs: 1,
        isCaptain: false
      });
  
      const { errors } = pirate.validateSync();
      expect(errors.numHands.message).toEqual('Path `numHands` is required.');
    });
  });

  describe('isCaptain', () => {
    it('requires isCaptain', () => {
      const pirate = new Pirate({
        name: 'One-Eyed Peg-Legged Hook-Hand',
        numEyes: 1,
        numLegs: 1,
        numHands: 1
      });
  
      const { errors } = pirate.validateSync();
      expect(errors.isCaptain.message).toEqual('Path `isCaptain` is required.');
    });
  });
});
