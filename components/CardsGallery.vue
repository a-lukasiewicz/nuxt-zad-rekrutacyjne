<template>
  <div class="p-6 flex flex-col lg:grid lg:grid-cols-4 lg:gap-8">
    <Card v-for="(product, index) in $store.state.products" :key="index" :product="product"></Card>
  </div>
</template>
<script>
</script>
