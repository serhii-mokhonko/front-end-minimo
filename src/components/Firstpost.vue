<template>
  <article class="container">
    <img src="img/1_03.jpg" alt="img" class="article__img" />
    <div class="article__content">
      <div class="article__c">
        <a href="#">photodiary</a>
      </div>
      <h2 class="article__title">The perfect weekend getaway</h2>
      <div class="article__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
      <div class="article__c">
        <a href="#">leave a comment</a>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.article__img {
  display: block;
  max-width: 100%;
  height: auto;
  margin-top: 75px;
}
.article__content {
  width: 100%;
  max-width: 890px;
  margin: 50px auto 0px;;
}
.article__content a {
  text-decoration: none;
  color: #bdb7aa;
  transition: color, 0.5s, linear;
}
a:hover {
  color: black;
}
.article__c {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  padding-bottom: 30px;
}
.article__title {
  font-family: "Playfair Display", serif;
  font-size: 30px;
  font-weight: 400;
  color: #626262;
  margin-bottom: 45px;
}
.article__text {
  font-family: "Playfair Display", serif;
  font-size: 14px;
  line-height: 2;
  color: #626262;
  margin-bottom: 50px;
}
</style>