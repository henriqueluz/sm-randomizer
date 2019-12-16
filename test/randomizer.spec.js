import { randomizer } from '../app/randomizer';

describe('Scrum master randomizer', () => {
  test('Selects presenter randomly', () => {
    const mock = jest.fn(() => Math.floor(Math.random() * 5));
    randomizer(mock);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
