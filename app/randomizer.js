export class Randomizer {

  constructor(fnToRandom) {
    this.fnToRandom = fnToRandom;
  }

  selectPresenter(attendees = []) {
    return attendees[this.fnToRandom.call()];
  }

}
