<template>
  <div>
    <ul>
      <template v-for="(item, index) in items">
        <router-link :to="item.path"  class="no-underline"> 
          <span > {{ item.title[this.$store.state.lang] }} </span>
        </router-link>
          <span v-if="index < items.length - 1"> > </span>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    items: {
      type: Array,
      default: () => [
        {title: {"en":'Blog' ,  "pt": "Blog"}, "path":"/blog"}
      ]
    }
  },
  data: () => ({ 
    content: "this is a test"
  }),
  methods: {
    updateMessage(newMessage) {
      this.content = newMessage;
    },
  }
};
</script>