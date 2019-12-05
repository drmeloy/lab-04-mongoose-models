const Computer = require('./Computer');

describe('Computer', () => {
  describe('brand', () => {
    it('requires a brand', () => {
      const computer = new Computer({
        type: 'desktop',
        hd: '1TB',
        ram: '500GB',
        isGaming: false
      });

      const { errors } = computer.validateSync();
      expect(errors.brand.message).toEqual('Path `brand` is required.');
    });

    it('should be of type String', () => {
      const computer = new Computer({
        brand: [],
        type: 'desktop',
        hd: '1TB',
        ram: '500GB',
        isGaming: false
      });

      const { errors } = computer.validateSync();
      expect(errors.brand.message).toEqual('Cast to String failed for value \"[]\" at path \"brand\"');
    });
  });

  describe('type', () => {
    it('requires a type', () => {
      const computer = new Computer({
        brand: [],
        hd: '1TB',
        ram: '500GB',
        isGaming: false
      });

      const { errors } = computer.validateSync();
      expect(errors.type.message).toEqual('Path `type` is required.');
    });

    it('should be of type String', () => {
      const computer = new Computer({
        brand: 'Acer',
        type: {},
        hd: '1TB',
        ram: '500GB',
        isGaming: false
      });

      const { errors } = computer.validateSync();
      expect(errors.type.message).toEqual('Cast to String failed for value \"{}\" at path \"type\"');
    });
  });

  describe('hd', () => {
    it('requires an hd', () => {
      const computer = new Computer({
        brand: 'Acer',
        type: 'laptop',
        ram: '500GB',
        isGaming: false
      });

      const { errors } = computer.validateSync();
      expect(errors.hd.message).toEqual('Path `hd` is required.');
    });

    it('should be of type String', () => {
      const computer = new Computer({
        brand: 'Acer',
        type: 'laptop',
        hd: [],
        ram: '500GB',
        isGaming: false
      });

      const { errors } = computer.validateSync();
      expect(errors.hd.message).toEqual('Cast to String failed for value \"[]\" at path \"hd\"');
    });
  });

  describe('ram', () => {
    it('requires a brand', () => {
      const computer = new Computer({
        brand: 'Acer',
        type: 'laptop',
        hd: '1TB',
        isGaming: false
      });

      const { errors } = computer.validateSync();
      expect(errors.ram.message).toEqual('Path `ram` is required.');
    });

    it('should be of type String', () => {
      const computer = new Computer({
        brand: 'Acer',
        type: 'laptop',
        hd: '1TB',
        ram: [],
        isGaming: false
      });

      const { errors } = computer.validateSync();
      expect(errors.ram.message).toEqual('Cast to String failed for value \"[]\" at path \"ram\"');
    });
  });

  describe('isGaming', () => {
    it('requires isGaming', () => {
      const computer = new Computer({
        brand: 'Acer',
        type: 'laptop',
        hd: '1TB',
        ram: '500GB',
      });

      const { errors } = computer.validateSync();
      expect(errors.isGaming.message).toEqual('Path `isGaming` is required.');
    });

    it('should be of type Boolean', () => {
      const computer = new Computer({
        brand: 'Acer',
        type: 'laptop',
        hd: '1TB',
        ram: '500GB',
        isGaming: []
      });

      const { errors } = computer.validateSync();
      expect(errors.isGaming.message).toEqual('Cast to Boolean failed for value \"[]\" at path \"isGaming\"');
    });
  })
});