export default {
  name: "Staff",
  data() {
    return {
      urlBase: "http://hq.vatme.net/api/",
      vaccCode: "obbb",
      staff: {},
      fields: [
        {
          key: "firstname",
          label: "Name",
        },
        {
          key: "vatsimid",
          label: "VATSIM ID",
        },
        {
          key: "staffposition",
          label: "Staff Position",
        },
      ],
    };
  },
  methods: {
    fetchStaff() {
      fetch(`${this.urlBase}vacc/staff/${this.vaccCode}`)
        .then((res) => {
          return res.json();
        })
        .then(this.populateStaff);
    },

    populateStaff(results) {
      this.staff = results;
    },
  },

  beforeMount() {
    this.fetchStaff();
  },
};