<template>
    <carousel autoplay="4000" wrapAround pauseAutoplayOnHover>
        <slide v-for="product in data.allProducts" :key="product.id" v-if="data && !pending">
            <nuxt-link :to="{ path: '/products/' + product.productSlug }">
                <img v-for="image in product.productImage" :src="image.url">
            </nuxt-link>
        </slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
</template>

<script setup>
import productFeatured from '@/cms/queries/productFeatured'
const { data, pending, error } = await useLazyAsyncQuery(productFeatured)
</script>

<style lang="scss" scoped>
.carousel {
    background-color: $grey;
    padding: 2rem 0;
}
</style>