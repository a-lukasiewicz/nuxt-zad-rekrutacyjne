<template>
  <div class=" px-8 lg:px-24 py-6">
    <div
      class="bg-white w-full h-16 rounded-xl mb-3 border-2 border-gray-200 shadow-lg p-2"
    >
      <input
        type="text"
        v-model="productName"
        placeholder="Search for products"
        class="w-full h-full text-2xl rounded-lg"
      />
    </div>
    <ul 
    v-if="productName"
      v-for="product in elements" :key="product">
      <li>
        <div class="flex justify-between">
          <h1>{{product["productName"]}}</h1>
          <div class="flex">
            <h3 class="font-bold">{{product["price"]}}</h3>
            <p>{{product["currency"]}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: "Searchbar",
  data (){
    return {
      productName: ''
    }
  },
  computed: {
    products(){
      return this.$store.state.products;
    },
    elements(){
      return this.products.filter(product=>product.productName.includes(this.productName))
    },
  }
}
</script>
