<template>
  <div id="app">
    <app-header></app-header>
    <first-post></first-post>
  </div>
</template>

<script>
import Header from './components/Header'
import FirstPost from './components/Firstpost'
export default {
  name: 'app',
  components: {
    appHeader: Header,
    firstPost: FirstPost
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700|Playfair+Display|Ubuntu:300,400&display=swap');

body {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

.container {
  width: 100%;
  max-width: 1062px;
  margin: 0 auto;
}

/* font-family: 'Inconsolata', monospace;
font-family: 'Playfair Display', serif;
font-family: 'Ubuntu', sans-serif; */
</style>
