const attendees = ['Henrique', 'Tomasz', 'Darragh', 'Sergii', 'Illia'];

export const randomizer = (fn) => {
  const presenter = attendees[fn.call()];
  return presenter;
};
