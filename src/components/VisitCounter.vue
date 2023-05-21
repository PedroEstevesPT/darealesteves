<template>
  <div v-if="this.$store.state.lang=='en'">
    Website visits: {{ viewerCount }}
  </div>
  <div v-else>
    Visitas do site: {{ viewerCount }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewerCount: 0
    }
  },
  methods: {
    async fetchViewCount() {
      const response = await fetch("https://pedroestevespersonalsite-backend.azurewebsites.net/api/view_count");
      const data = await response.json();
      this.viewerCount = data.count
    }
  },
  mounted() {
    this.fetchViewCount();
  }
}
</script>

<style lang="scss" scoped>
  @import  "../styles/text.scss";
</style>