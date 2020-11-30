export default {
  name: "Controllers",
  data() {
    return {
      urlBase: "http://hq.vatme.net/api/",
      vaccCode: "obbb",
      allControllers: {},
      activeControllers: {},
      inactiveControllers: {},
      soloValidatedControllers: {},
      allVisitingControllers: {},
      activeVisitingControllers: {},
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
      this.activeControllers = this.setControllerStatus(this.allControllers, true);
      this.inactiveControllers = this.setControllerStatus(this.allControllers, false);
    },

    setControllerStatus(controllerArray, active) {
      const controllers = [];
      for (let controller of controllerArray) {
        if (active && (controller.approved_for != null && controller.approved_for != "")) {
          controllers.push(controller)
        } else if (!active && (controller.approved_for == null || controller.approved_for == "")) {
          controllers.push(controller)
        }
      }
      return controllers;
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

    fetchVisitingControllers() {
      fetch(`${this.urlBase}vacc/visitors/${this.vaccCode}`)
        .then((res) => {
          return res.json();
        })
        .then(this.populateVisitorControllers);
    },

    populateVisitorControllers(results) {
      this.visitingControllers = results;
      this.activeVisitingControllers = this.setControllerStatus(this.visitingControllers, true);
    },
  },
  beforeMount() {
    this.fetchControllers();
    this.fetchSoloControllers();
    this.fetchVisitingControllers();
  },
};