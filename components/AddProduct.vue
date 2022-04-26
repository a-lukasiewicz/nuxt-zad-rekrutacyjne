<template lang="">
<section>
    <h1 class="text-2xl ml-3" id="add-product">Dodaj produkt</h1>
    <div class="w-1/2 flex flex-col justify-center p-8">
        <div class="flex flex-col bg-red-400 p-8">
            <input v-model="productName" class=" rounded w-full my-4 py-2 px-8 text-gray-700" type="text" placeholder="Tytuł" required>
            <input v-model="description" class=" rounded w-full my-4 py-2 px-8 text-gray-700" type="text" placeholder="Opis">
            <select v-model="category" name="" id="" class="rounded my-4 w-full py-2 px-8 text-gray-700">
                <option value="" selected disabled hidden>Kategoria</option>
                <option value="Na drzewie">Na drzewie</option>
                <option value="Na ziemii">Na ziemii</option>
                <option value="Inne">Inne</option>
            </select>
            <input v-model="price" class=" rounded w-full  my-4 py-2 px-8 text-gray-700" type="text" placeholder="Cena">
            <select v-model="currency" name="" id="" class="rounded my-4 w-full py-2 px-8 text-gray-700">
                <option value="" disabled selected>Waluta</option>
                <option value="PLN">PLN</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
        </div>
    </div>
    <div class="w-1/2 flex flex-col justify-center p-8">
        <p>Product name: {{productName}}</p>
        <p>Opis: {{description}}</p>
        <p>Kategoria: {{category}}</p>
        <p>Cena: {{price}}</p>
        <p>Waluta: {{currency}}</p>
    </div>
        <button @click="addElement" class="px-3 py-2 mx-12 mb-6 bg-gray-800 text-white text-xs font-bold uppercase rounded">Dodaj produkt</button>
</section>
</template>
<script>
export default {
    data(){
        return {
            productName: "",
            description: "",
            category: "",
            price: 0,
            currency: ""
        }
    },
    methods:{
        addElement(){
            this.$store.commit("add_product", {
                productName: this.productName,
            description: this.description,
            category: this.category,
            price: this.price,
            currency: this.currency,
            })
        }
    }
}
</script>