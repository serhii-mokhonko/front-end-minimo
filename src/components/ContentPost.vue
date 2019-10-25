<template>
  <div class="container">
    <div class="article" v-for="article in articles.slice(start, end)" :key="article.id">
      <img :src="article.img" class="aricle__img" alt="here image" />
      <div class="article__c">{{article.category}}</div>
      <h2 class="article__title">{{article.title}}</h2>
      <div class="article__content">{{article.content.slice(0, 180)}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['start', 'end'],
  data() {
    return {
      articles: [
        {
          id: 0,
          title: "More than just a music festival",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          category: "lifestyle"
        },
        {
          id: 1,
          title: "Life tastes better with coffee",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
          category: "lifestyle"
        },
        {
          id: 2,
          title: "American dream",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img:
            "https://images.unsplash.com/photo-1570783875947-197dee0b51a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          category: "photodairy"
        },
        {
          id: 3,
          title: "A day exploring the Alps",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img:
            "https://images.unsplash.com/photo-1486998115004-2caf80306eee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1094&q=80",
          category: "photodairy"
        },
        {
          id: 4,
          title: "A day exploring the Alps",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img:
            "https://images.unsplash.com/38/awhCbhLqRceCdjcPQUnn_IMG_0249.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
          category: "photodairy"
        },
        {
          id: 5,
          title: "A day exploring the Alps",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img:
            "https://images.pexels.com/photos/1161268/pexels-photo-1161268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          category: "photodairy"
        },
        {
          id: 6,
          title: "Life tastes better with coffee",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img: "https://cdn.pixabay.com/photo/2019/09/11/21/47/autumn-4470022_960_720.jpg",
          category: "lifestyle"
        },
        {
          id: 7,
          title: "American dream",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img:
            "https://images.pexels.com/photos/748626/pexels-photo-748626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          category: "photodairy"
        },
        {
          id: 8,
          title: "A day exploring the Alps",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img:
            "https://images.pexels.com/photos/1299417/pexels-photo-1299417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          category: "photodairy"
        },
        {
          id: 9,
          title: "A day exploring the Alps",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non feugiat augue, sed luctus dui. Nam vitae dignissim neque. Curabitur id nulla et metus tincidunt malesuada. Quisque eu lacus quis erat varius tristique. Maecenas tristique urna vitae sapien dictum, luctus eleifend velit sagittis. Nulla at ipsum id justo tempus finibus. Cras volutpat a ligula viverra rhoncus. Suspendisse faucibus tortor ut porta porta. Fusce pulvinar dui urna, mattis rhoncus metus semper sit amet. Vivamus sed pharetra dui, et aliquet neque. Fusce auctor augue vel massa imperdiet, nec bibendum mi elementum. Curabitur consectetur lacus nec sapien suscipit mattis. Sed laoreet consequat tellus, et faucibus lacus auctor varius. Fusce quis viverra est. Aliquam mattis, ipsum eu hendrerit sodales, tellus libero auctor quam, sed fringilla enim augue sodales lectus.",
          img:
            "https://images.pexels.com/photos/1799433/pexels-photo-1799433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          category: "photodairy"
        },
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
  padding: 50px 0;
}
.article {
  width: 422px;
  padding-bottom: 30px;
}

.article h2 {
  font-family: "Playfair Display", serif;
  font-size: 30px;
  font-weight: 400;
  color: #626262;
  margin-bottom: 45px;
}

.article img {
  display: block;
  max-width: 100%;
  height: auto;
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
</style>