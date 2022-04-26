<template lang="">
    <header class='flex items-center justify-center lg:justify-end lg:mr-12 pt-6'>
            <a href="#add-product"
              class="px-3 py-2 mx-6 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            >
              Dodaj nowy produkt
            </a>
            <button @click="changeCurrency('EUR')"
              class="px-3 py-2 mx-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            >
              €
            </button>
            <button  @click="changeCurrency('USD')"
              class="px-3 py-2 mx-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            >
              $
            </button>
    </header>
</template>
<script>
export default {
    data(){
      return {
      }
    },

    methods:{
        changeCurrency(currency){
            this.$store.commit("changeCurrency", currency);
        }
    },
    computed: {
      getCurrentCurrency(){
        return this.$store.state.currentCurrency;
      }
    }
}
</script>