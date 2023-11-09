<template>
    <nuxt-link class="product--card" :to="{ path: '/products/' + product.productSlug }" v-for="product in data.allProducts"
        :key="product.id" v-if="data &&!pending">
        <div class="product--img--container">
            <img v-for="image in product.productImage" :src="image.url">
        </div>
        <div>
            <h2> {{ product.productModel.modelName }} </h2>
            <p>{{ product.productDetail }} </p>
            <p>{{ product.productPrice }}€</p>
        </div>
    </nuxt-link>
</template>

<script setup>
import product from '@/cms/queries/product'
const { data, pending, error } = await useLazyAsyncQuery(product)
</script>

<style lang="scss">
.product--card {
    .product--img--container {
        padding: 1rem;
        background-color: $grey;
        margin-bottom: 1rem;
    }
    p {
        font-family: $text;
    }
}
</style>