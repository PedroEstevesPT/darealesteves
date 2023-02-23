<template>
  <a :href="pdfUrl" download> <span v-html="text"/></a>
</template>

<script>
    export default {
    name: 'DownloadableLink',
    props: ["text"],
    data() {
        return { 
            pdfUrl: 'https://www.dropbox.com/s/qqbp9ot4ofv4v5r/CV-202.pdf?dl=1'
        }
    }
    };
</script>

<style lang="scss" scoped>
</style>
