<template>
    <div class="cart-page">
        <CartC />
    </div>
</template>

<script>
import CartC from '../components/CartC.vue';

export default {
    components: {
        CartC
    }
};
</script>

<style scoped>
.cart-page {
    padding: 20px;
}
</style>