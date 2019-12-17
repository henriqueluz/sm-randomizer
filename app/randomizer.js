

export const randomizer = (fn, attendees = []) => {
  const presenter = attendees[fn.call()];
  return presenter;
};
