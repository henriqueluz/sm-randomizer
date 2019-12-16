import { randomizer } from '../app/randomizer';
import { ATTENDEES } from '../app/randomizer';

describe('Scrum master randomizer', () => {
  test('Selects presenter randomly', () => {
    const mock = jest.fn(() => Math.floor(Math.random() * ATTENDEES.length));
    const presenter = randomizer(mock);

    expect(mock).toHaveBeenCalledTimes(1);
    expect(ATTENDEES).toContain(presenter);
  });
});
