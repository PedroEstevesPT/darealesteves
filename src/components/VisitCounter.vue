Copy code
<template>
  <div>
    <p>Number of visits: {{ viewerCount }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewerCount: 0
    }
  },
  mounted() {
    // Send a pageview hit to Google Analytics to track the user's visit
    gtag('config', 'G-BNP5CB3GQ2');

    // Get the number of current active users on the site
    gtag('event', 'active_users', {
      event_category: 'engagement',
      event_action: 'active_users',
      non_interaction: true
    });
    // Listen for changes in the number of active users
    gtag('event', 'active_users', {
      event_category: 'engagement',
      event_callback: () => {
        const viewerCount = window.gtag.data.get('activeUsers');
        this.viewerCount = viewerCount;
      }
    });
  }
}
</script>