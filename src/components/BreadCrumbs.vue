<template>
  <div>
    <ul>
      <li v-for="(route, index) in matchedRoutes" :key="route.path">
        <router-link :to="{ path: route.path }">{{ route.name }}</router-link>
        <span v-if="index < matchedRoutes.length - 1"> > </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    matchedRoutes() {
      return this.$route.matched;
    }
  }
};
</script>