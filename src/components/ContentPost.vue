<template>
  <div class="container">
    <div class="article" v-for="article in articles" :key="article.id">
      <img :src="article.img" alt="here image" />
      <div class="article__c">{{article.category}}</div>
      <h2 class="article__title">{{article.title}}</h2>
      <div class="article__content">{{article.content.slice(0, 180)}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 0,
          title: "More than just a music festival",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img: "img/minimo__03.jpg",
          category: "lifestyle"
        },
        {
          id: 1,
          title: "Life tastes better with coffee",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img: "img/minimo__05.jpg",
          category: "lifestyle"
        },
        {
          id: 2,
          title: "American dream",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img: "img/minimo__09.jpg",
          category: "photodairy"
        },
        {
          id: 3,
          title: "A day exploring the Alps",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img: "img/minimo__10.jpg",
          category: "photodairy"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 85px;
}
.article {
  width: 422px;
}

.article h2 {
  font-family: "Playfair Display", serif;
  font-size: 30px;
  font-weight: 400;
  color: #626262;
  margin-bottom: 45px;
}

.article__c {
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  color: #bdb7aa;
  margin: 30px 0px;
}

.article__content {
  font-family: "Playfair Display", serif;
  font-size: 14px;
  line-height: 2;
  color: #626262;
}

.article img {
  max-width: 422px;
  height: auto;
}
</style>