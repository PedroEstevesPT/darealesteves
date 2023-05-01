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
      const response = await fetch("https://api.countapi.xyz/get/pedrofortunatoesteves.github.io/544bfc0e-ec46-41cb-a774-147b3b5bf75a?value");
      const data = await response.json();
      this.viewerCount = data.value
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