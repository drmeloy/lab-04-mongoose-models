const Guitar = require('./Guitar');

describe('Guitar model', () => {
  describe('brand', () => {
    it('requires a brand', () => {
      const guitar = new Guitar({
        type: 'electric',
        numStrings: 6,
        woodType: 'spruce'
      });

      const { errors } = guitar.validateSync();
      expect(errors.brand.message).toEqual('Path `brand` is required.');
    });

    it('should be of type String', () => {
      const guitar = new Guitar({
        brand: {},
        type: 'acoustic',
        numStrings: 13,
        woodType: 'Oak'
      });

      const { errors } = guitar.validateSync();
      expect(errors.brand.message).toEqual('Cast to String failed for value \"{}\" at path \"brand\"');
    });
  });

  describe('type', () => {
    it('requires a type', () => {
      const guitar = new Guitar({
        brand: 'Yamaha',
        numStrings: 12,
        woodType: 'Oak'
      });

      const { errors } = guitar.validateSync();
      expect(errors.type.message).toEqual('Path `type` is required.'); 
    });
  });

  describe('numStrings', () => {
    it('requires numStrings', () => {
      const guitar = new Guitar({
        brand: 'Evergreen',
        type: 'acoustic',
        woodType: 'Cherry'
      });

      const { errors } = guitar.validateSync();
      expect(errors.numStrings.message).toEqual('Path `numStrings` is required.');
    });

    it('is over 3', () => {
      const guitar = new Guitar({
        brand: 'Breedlove',
        type: 'acoustic',
        numStrings: 3
      });

      const { errors } = guitar.validateSync();
      expect(errors.numStrings.message).toEqual('Path `numStrings` (3) is less than minimum allowed value (4).');
    });

    it('is under 13', () => {
      const guitar = new Guitar({
        brand: 'Breedlove',
        type: 'acoustic',
        numStrings: 13
      });

      const { errors } = guitar.validateSync();
      expect(errors.numStrings.message).toEqual('Path `numStrings` (13) is more than maximum allowed value (12).');
    });
  });

  describe('woodType', () => {
    it('should be of type String', () => {
      const guitar = new Guitar({
        brand: 'Breedlove',
        type: 'acoustic',
        numStrings: 13,
        woodType: []
      });

      const { errors } = guitar.validateSync();
      expect(errors.woodType.message).toEqual('Cast to String failed for value \"[]\" at path \"woodType\"');
    });
  });
});
