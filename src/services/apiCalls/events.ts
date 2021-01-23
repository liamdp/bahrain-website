import variables from '../variables';

export function fetchEvents() {
  fetch(`${variables.data['urlBase']}events/vacc/${variables.data['vaccCode']}`)
    .then((res) => {
      return res.json();
    })
    .then(this.populateEvents);
  }