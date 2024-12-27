<template>
    <div class="product-card">
        <img :src="product.image" alt="Product Image" />
        <h3>{{ product.name }}</h3>
        <p>R$ {{ product.price.toFixed(2) }}</p>
        <button @click="addToCart(product)">Adicionar ao Carrinho</button>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    methods: {
        addToCart(product) {
            console.log('Produto:', product);
            this.$store.dispatch('addProductToCart', product);
        }
    }
};
</script>

<style scoped>
.product-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    text-align: center;
}

.product-card img {
    width: 100%;
    max-width: 150px;
}

.product-card button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}
</style>