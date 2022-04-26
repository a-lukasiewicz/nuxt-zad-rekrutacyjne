<template lang="">
  <div>
    <div class="py-6">
      <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="w-1/3 bg-cover bg-red-400" />
        <div class="w-2/3 p-4">
          <h1 class="text-gray-900 font-bold text-2xl">
            {{ product.productName }}
          </h1>
          <p class="mt-2 text-gray-600 text-sm">
            {{ product.description }}
          </p>
          <p class="mt-2 text-gray-600 text-sm">
            Kategoria: {{ product.category }}
          </p>
          <div class="flex item-center justify-between mt-3">
            <h1 class="text-gray-700 font-bold text-xl">
              {{ product.price }} <span class="font-normal">{{ product.currency }}</span>
            </h1>
            <button
              class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            >
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props: ['product']
}
</script>
