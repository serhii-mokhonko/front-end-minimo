<template>
  <div class="search__container">
    <div class="input__container">
      <h3>Sign up for our newsletter!</h3>
      <input type="email" placeholder="Enter a valid email address" />
      <i class="input__icon"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search__container {
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 287px;
  background: #f0f0f0;
}
.input__container {
  font-family: "Playfair Display", serif;
  font-size: 30px;
  color: #626262;
  max-width: 500px;
  margin: 0 auto;
}
.input__container input {
  width: 100%;
  max-width: 400px;
  height: 28px;
  margin-top: 90px;
}
.input__icon {
  width: 28px;
  height: 28px;
}
</style>