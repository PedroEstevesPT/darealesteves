
/*
In Vue.js 3.0, you can create a custom function or method and reuse it across different components by creating a mixin. A mixin is a way to share common functionality across multiple Vue components.
You can create a mixin by defining an object with your custom methods and then using the mixins option when defining your component. For example:
*/

export const functionMixin = {
  methods: {
    scrollToElement(id){
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    },
    updateLanguage(activeLang){
      //Check if the choosen language is available for the current route:
      if (this.$route.meta.availableLangs.includes(activeLang)){
        this.$store.commit('updateLang', activeLang);
      }
      else{
        console.log("this language is not available for the current route");
        
        if (activeLang == "pt"){
          notify({
            "title": "Aviso",
            title: "⚠️ Esta página ainda não está disponível em português.",
            type: "warn"
          });
        }
        else if (activeLang == "en"){
          notify({
            title: "⚠️ Warning",
            text: "This page is not available in English yet",
            type: "warn"
          });
        }
      }
    }
  }
}