<template>
    <div class="cart">
        <h2>Carrinho</h2>
        <div v-if="cartItems.length === 0">O carrinho está vazio.</div>
        <ul>
            <li v-for="item in cartItems" :key="item.id">
                <span>{{ item.name }} ({{ item.quantity }})</span>
                <button @click="removeFromCart(item.id)">Remover</button>
            </li>
        </ul>
        <div v-if="cartItems.length > 0">
            <p>Total: R$ {{ cartTotal.toFixed(2) }}</p>
            <button @click="clearCart">Limpar Carrinho</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cartItems() {
            return this.$store.getters.cartItems;
        },
        cartTotal() {
            return this.$store.getters.cartTotal;
        }
    },
    methods: {
        removeFromCart(productId) {
            this.$store.dispatch('removeProductFromCart', productId);
        },
        clearCart() {
            this.$store.dispatch('clearCart');
        }
    }
};
</script>

<style scoped>
.cart {
    padding: 20px;
}

.cart button {
    background-color: #f44336;
    color: white;
}
</style>