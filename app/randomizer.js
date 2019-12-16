export const ATTENDEES = ['Henrique', 'Tomasz', 'Darragh', 'Sergii', 'Illia'];

export const randomizer = (fn) => {
  const presenter = ATTENDEES[fn.call()];
  return presenter;
};
