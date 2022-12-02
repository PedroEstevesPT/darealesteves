//This file contains methods used across different components

export default {
    foo: function() { alert("foo!") },

    isMobile: function() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
    }

  }