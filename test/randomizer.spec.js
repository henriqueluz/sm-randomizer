import { randomizer } from '../app/randomizer';

describe('Scrum master randomizer', () => {
  test('Selects Henrique', () => {
    expect(randomizer()).toEqual('Henrique');
  });
});
