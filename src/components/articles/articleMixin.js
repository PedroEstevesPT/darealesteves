
/*
In Vue.js 3.0, you can create a custom function or method and reuse it across different components by creating a mixin. A mixin is a way to share common functionality across multiple Vue components.
You can create a mixin by defining an object with your custom methods and then using the mixins option when defining your component. For example:
*/

export const articleMixin = {
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}