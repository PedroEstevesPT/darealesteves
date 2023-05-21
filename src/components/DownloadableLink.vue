<template>
  <a :href="pdfUrl" download> <span v-html="text"/></a>
</template>

<script>
    export default {
    name: 'DownloadableLink',
    props: ["text"],
    data() {
        return { 
            pdfUrl: 'https://www.dropbox.com/s/p7b7oij4q8o58c1/cv_without_contacts.pdf?dl=1'
        }
    }
    };
</script>

<style lang="scss" scoped>
</style>
