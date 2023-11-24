<template>
  <div id="app">
    <navBar/>
    <home/>
  </div>
</template>

<script>
 import navBar from './components/navBar.vue'
 import home from './components/home.vue'

export default {
  name: 'App',
  components: {
    navBar,
    home
  }
}
</script>

<style>

</style>
