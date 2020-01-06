import Randomizer from '../src/lib/randomizer';

describe('Scrum master randomizer', () => {
  test('Selects presenter randomly', () => {
    const attendees = ['Darragh', 'Henrique', 'Illia', 'Tomasz', 'Sergii']
    const mock = jest.fn(() => Math.floor(Math.random() * attendees.length));
    const randomizer = new Randomizer(mock);
    const presenter = randomizer.selectPresenter(attendees);

    expect(mock).toHaveBeenCalledTimes(1);
    expect(attendees).toContain(presenter);
  });
});
