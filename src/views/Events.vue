<template>
  <div class="events">
    <div v-if="events.length">
      <div v-for="event in events" v-bind:key="event.id">
        <a :href="event.link" class="event-link">
          <h1>{{ event.name }}</h1>
        </a>
        <img class="banner" :src="event.bannerLink" alt="Banner Link" />
        <p class="event-desc">
          {{ formatDesc(event.description) }}
        </p>
      </div>
    </div>
    <div class="no-events" v-else>No events could be found 😢</div>
  </div>
</template>

<script language="ts">
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
    },

    formatDesc(desc) {
      let formattedString = desc.replace(/(<([^>]+)>)/gi, "");
      formattedString = formattedString.replace(/&nbsp;/gi, "\n");
      return formattedString;
    },
  },
  beforeMount() {
    this.fetchEvents();
  },
};
</script>

<style lang="scss">
.banner {
  height: 500px;
}
.event-link {
  color: #f5faff;
  text-decoration: none;
}
.events {
  padding: 1rem 0 3rem 0;
}
.event-desc {
  color: #f5faff;
  width: 890px;
  margin: auto;
}
.no-events {
  color: #f5faff;
}
</style>
