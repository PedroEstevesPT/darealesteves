<template>
  <div class="container">
    <h1>
      <span class="white-text text-large" style="font-weight:bold;">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
  </div>
</template>

<script>
/*
displayTextArray: {"pt": ["Olá, sou o Pedro","Obrigado por visitares o meu portefólio online","Espero que gostes!"],
                   "en": ["Hello, I am Pedro!","Welcome to my online portfolio","Hope you enjoy it!"]},
*/

export default {
  name: "typeWriter",
  props: {
    displayTextArray: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {

      
        if (this.displayTextArray == null){ 
                      this.displayTextArrayIndex -= 1;
          return;
        }
      

        if(this.displayTextArray[this.$store.state.lang][this.displayTextArrayIndex] == undefined) {
            this.displayTextArrayIndex = 0;
        }
        if (this.charIndex < this.displayTextArray[this.$store.state.lang][this.displayTextArrayIndex].length) {
            if (!this.typeStatus) this.typeStatus = true;
            this.typeValue += this.displayTextArray[this.$store.state.lang][this.displayTextArrayIndex].charAt(
            this.charIndex
            );
            this.charIndex += 1;
            setTimeout(this.typeText, this.typingSpeed);
        } else {
            this.typeStatus = false;
            setTimeout(this.eraseText, this.newTextDelay);
        }
    },
    eraseText() {

      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.$store.state.lang][this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  watch: {
    displayTextArray: {
      immediate: true,
      handler(newArray) {
        if (newArray != null && newArray[this.$store.state.lang] != undefined) {
          this.typeText(); // Call typeText method when displayTextArray is available
        }
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import  "../styles/text.scss";


.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-weight: normal;
  span.typed-text {
    color: white;
    font-size: 'Roboto';
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 100%;
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
// Cursor blinking CSS Ends...
</style>