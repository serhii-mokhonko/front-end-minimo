<template>
  <div id="app">
    <app-header></app-header>
    <first-post></first-post>
    <content-post :start="0" :end="4"></content-post>
    <search-block></search-block>
    <content-post :start="4" :end="endPst"></content-post>
    <div class="container wrap__btn">
      <button class="btn" @click='loadMore'>Load more</button>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import FirstPost from "./components/Firstpost";
import ContentPost from "./components/ContentPost";
import SearchBlock from "./components/SearchBlock";
import Footer from "./components/Footer";
// import Button from "./components/BtnBlock";
export default {
  name: "app",
  data() {
    return {
      endPst: 6
    };
  },
  methods: {
    loadMore() {
      this.endPst = this.endPst + 2
    }
  },
  components: {
    appHeader: Header,
    firstPost: FirstPost,
    contentPost: ContentPost,
    searchBlock: SearchBlock,
    // btnBlock: Button,
    appFooter: Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700|Playfair+Display|Ubuntu:300,400&display=swap");

body {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.container {
  width: 100%;
  max-width: 1062px;
  margin: 0 auto;
}

.wrap__btn {
  padding: 50px 0;
  text-align: center;
}
.btn {
  font-family: "Playfair Display", serif;
  font-size: 20px;
  color: #626262;
  background: #fff;
  border: 1px solid #626262;
  padding: 20px 35px;
  transition: color 0.3s linear;
}

.btn:hover {
  background: #f0f0f0;
  color: #000;
  border-color: #000;
}
</style>
