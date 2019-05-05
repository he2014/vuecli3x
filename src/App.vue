<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" v-on="{click:fun,mouseleave:func,mouseenter:fune}"> -->
    <!-- <div>{{getTodoById}}</div> -->

    <!-- <img alt="dd" src="/image/logo.png"> -->
    <!-- <AsyncComponent msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapGetters(["getTodoById"])
  },

  methods: {
    ...mapMutations(["ADD"]),
    ...mapActions(["add"]),
    fun() {
      this.add("sssss");
    },
    func() {
      this.add("mouseLeave");
    },
    fune() {
      this.add("mouseEnter");
    }
  },
  components: {},

  mounted() {
    //console.log(0);
    this.ADD("DDDDDD");
  }
};
</script>

<style>
#app {
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>