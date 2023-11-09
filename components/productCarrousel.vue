<template>
    <carousel autoplay="4000" wrapAround pauseAutoplayOnHover>
        <slide v-for="product in data.allProducts" :key="product.id" v-if="data && !pending">
            <nuxt-link :to="{ path: '/products/' + product.productSlug }">
                <img v-for="image in product.productImage" :src="image.url">
                <div>
                    <p>À partir de : {{ product.productPrice }} €</p>
                </div>
            </nuxt-link>
        </slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
</template>

<script setup>
import product from '@/cms/queries/product'
const { data, pending, error } = await useLazyAsyncQuery(product)
</script>

<style lang="scss" scoped>
.carousel {
    background-color: $grey;
    padding: 2rem 0;

    .carousel__slide {
        a {
            text-align: right;
        }
    }
}
</style>