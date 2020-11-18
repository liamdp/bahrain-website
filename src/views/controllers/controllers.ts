export default {
  name: "Controllers",
  data() {
    return {
      urlBase: "http://hq.vatme.net/api/",
      vaccCode: "obbb",
      allControllers: {},
      activeControllers: [],
      inactiveControllers: [],
      soloValidatedControllers: {},
    };
  },
  methods: {
    fetchControllers() {
      fetch(`${this.urlBase}vacc/residents/${this.vaccCode}`)
        .then((res) => {
          return res.json();
        })
        .then(this.populateControllers);
    },

    populateControllers(results) {
      this.allControllers = results;
      this.setControllerStatus();
    },

    setControllerStatus() {
      for (let controller of this.allControllers) {
        controller.approved_for != null && controller.approved_for != ""
          ? this.activeControllers.push(controller)
          : this.inactiveControllers.push(controller);
      }
    },

    fetchSoloControllers() {
      fetch(`${this.urlBase}solo/vacc/${this.vaccCode}`)
        .then((res) => {
          return res.json();
        })
        .then(this.populateSoloControllers);
    },

    populateSoloControllers(results) {
      this.soloValidatedControllers = results;
    },
  },
  beforeMount() {
    this.fetchControllers();
    this.fetchSoloControllers();
  },
};