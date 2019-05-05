<template>
  <span>
    <component :is="table"></component>
  </span>
</template>
<script>
export default {
  data() {
    return {
      table: "table"
    };
  },
  mounted() {
    //console.log(this.$route.query)
  }
};
</script>