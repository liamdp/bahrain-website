import moment from "moment";
export default {
  name: "Events",
  data() {
    return {
      urlBase: "http://hq.vatme.net/api/",
      vaccCode: "obbb",
      events: {},
    };
  },
  methods: {
    fetchEvents() {
      fetch(`${this.urlBase}events/vacc/${this.vaccCode}`)
        .then((res) => {
          return res.json();
        })
        .then(this.populateEvents);
    },

    populateEvents(results) {
      this.events = results;
      this.reverseEventsOrder(this.events);
    },

    formatDesc(desc) {
      let formattedString = desc.replace(/(<([^>]+)>)/gi, "");
      formattedString = formattedString.replace(/&nbsp;/gi, "\n");
      return formattedString;
    },

    formatDate(date) {
      moment.locale("en-gb");
      const humanDate = moment.unix(date).format("LLLL");
      return humanDate;
    },

    reverseEventsOrder(events) {
      events = this.events;
      return events.reverse();
    },
  },
  beforeMount() {
    this.fetchEvents();
  },
};