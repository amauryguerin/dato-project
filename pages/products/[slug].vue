<template>
    <div v-if="!pending" class="product--container">
        <div class="product--gallery">
            <img v-for="image in data.product.productImage" :src="image.url">
        </div>
        <div class="product--info">
            <h1>
                {{ data.product.productTitle }}
            </h1>
            <p>
                {{ data.product.productPrice }}€
            </p>
            <p>
                {{ data.product.productDesc }}
            </p>
        </div>
    </div>
</template>

<script setup>
import productBySlug from '@/cms/queries/productBySlug'
const route = useRoute()
const { data, pending, error } = await useLazyAsyncQuery(productBySlug, { slug: route.params.slug })
</script>

<style lang="scss" scoped>
.product--container {
    display: flex;
    flex-basis: 50%;
    gap: 4rem;
    padding: 0 2rem;

    .product--gallery,
    .product--info {
        width: 100%;
    }

    .product--gallery {
        background-color: $grey;

        img {
            width: 100%;
            object-fit: scale-down;
        }
    }
}
</style>