<template>
  <a :href="pdfUrl" download> <span v-html="text"/></a>
</template>

<script>
    export default {
    name: 'DownloadableLink',
    props: ["text"],
    data() {
        return {
            pdfUrl: 'https://www.dropbox.com/s/se7dciriy21cpwz/Pedro_Esteves_CV.pdf?dl=0'
        }
    }
    };
</script>

<style lang="scss" scoped>
</style>
