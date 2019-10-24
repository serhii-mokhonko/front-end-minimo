<template>
  <footer class="foot__container">
    <div class="container">
      <div class="foot__privacy">
        <a href="#">Terms and conditions</a>
        <a href="#">Privacy</a>
      </div>
      <div class="foot__social">
        <span>Folow</span>
        <a href="#"><vue-fontawesome icon="facebook" size="1.2" color="black"></vue-fontawesome></a>
        <a href="#"><vue-fontawesome icon="twitter" size="1.2" color="black"></vue-fontawesome></a>
        <a href="#"><vue-fontawesome icon="instagram" size="1.2" color="black"></vue-fontawesome></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
a, span {
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  text-decoration: none;
  margin: 0 0 0 25px;
  display: inline-block;
  color: rgb(0, 0, 0);
}
.foot__container {
  background: #f0f0f0;
  max-width: 100%;
  margin-top: 95px;
  height: 99px;
  display: flex;
  align-items: center;
}
.container {
    max-width: 900px;
  display: flex;
  justify-content: space-between;
}
</style>