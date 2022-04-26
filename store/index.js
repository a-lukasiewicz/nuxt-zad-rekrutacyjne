export const state = () => ({
	products: [
        {
            productName: "Domek 1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            category: "Na drzewie",
            price: 100,
            currency: "PLN"
        },
        {
            productName: "Domek 2",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            category: "Na drzewie",
            price: 150,
            currency: "PLN"
        },
        {
            productName: "Domek 3",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            category: "Na ziemii",
            price: 200,
            currency: "PLN"
        },
    ],
    currentCurrency: "PLN",
})

export const mutations = {
	add_product(state, product) {
		state.products.push(product);
	},
    changeCurrency(state,currency){
        state.currentCurrency=currency;
    }
}