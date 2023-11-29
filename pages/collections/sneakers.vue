<template>
    <product-archive v-if="!productsPending"
                     :productGlobal="productsData"/>
</template>

<script setup>
import getAllProducts from '~/cms/queries/allProducts.js';

const {data: productsData, pending: productsPending, error: productsError} = await useLazyAsyncQuery(getAllProducts);
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