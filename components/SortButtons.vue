<template lang="">
    <div class="flex justify-center   lg:justify-end lg:mr-12">
        <button @click="sort"
              class="px-3 py-2 mx-6 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            >
              Sortuj rosnąco
            </button>
            <button @click="sort"
              class="px-3 py-2 mx-6 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            >
              Sortuj malejąco
            </button>
    </div>
</template>
<script>
export default {
    data(){
      return {

      }
    },
    methods: {
      sort(){
        this.$store.commit('sort', this.products)
      }
    },
    computed: {
      products(){
        return this.$store.state.products;
      }
    }
}
</script>