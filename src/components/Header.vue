<template>
  <div class="container">
    <header>
      <h1>Minimø</h1>

      <nav>
        <a href="#" class="link">Lifestyle</a>
        <a href="#" class="link">Photodiary</a>
        <a href="#" class="link">Music</a>
        <a href="#" class="link">Travel</a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  color: #333333;
  margin-top: 70px;
}

h1 {
  font-family: "Inconsolata", monospace;
  letter-spacing: 12px;
  font-size: 30px;
}

nav {
  width: 100%;
  max-width: 580px;
  display: flex;
  justify-content: space-between;
}

.link {
  text-decoration: none;
  color: #626262;
  transition: color, 0.3s linear;
}

.link:hover {
  color: #333;
}
</style>