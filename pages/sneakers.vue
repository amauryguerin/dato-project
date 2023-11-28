<template>
        <section class="shop">
            <h1>Sneakers</h1>
            <div class="products--container">
                <product-card :productGlobal="productsData"/>
            </div>
        </section>
</template>

<script setup>
import allProducts from '~/cms/queries/allProducts.js';
const {data: productsData, pending: productsPending, error: productsError} = await useLazyAsyncQuery(allProducts);
</script>

<style lang="scss">
.shop {
    width: 80%;

    h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .products--container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
}
</style>