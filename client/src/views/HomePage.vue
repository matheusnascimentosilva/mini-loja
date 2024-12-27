<template>
    <div class="home">
        <h1 class="title">Produtos</h1>
        <div class="product-list">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard';

export default {
    components: {
        ProductCard
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
};
</script>

<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.title {
    margin-top: 50px;
    text-align: center;
    font-size: 36px;
}
</style>