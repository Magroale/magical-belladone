<template>
  <div id="app">
    <navBar :activeTab="activeTab" @tabClick="changeTab"/>
    <component :is="activeTab"/>
    <footerPage /> 
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
import home from './components/home.vue'
import footerPage from './components/footerPage.vue'
import pricesAndexamples from './components/pricesAndexamples.vue'
import termsAndServices from './components/termsAndServices.vue'

export default {
  name: 'App',
  components: {
    navBar,
    home,
    footerPage,
    pricesAndexamples,
    termsAndServices
  },
  data(){
    return{
      activeTab: 'home'
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  }
}
</script>

<style></style>
