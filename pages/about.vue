<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      laboriosam, aspernatur similique ipsum assumenda itaque corporis veritatis
      dolores quo magnam repellendus est debitis dolorum animi quis cum.
      Ducimus, non architecto!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      laboriosam, aspernatur similique ipsum assumenda itaque corporis veritatis
      dolores quo magnam repellendus est debitis dolorum animi quis cum.
      Ducimus, non architecto!
    </p>
  </div>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
