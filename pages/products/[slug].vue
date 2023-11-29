<template>
    <div v-if="!pending" class="product--container">
        <div class="product--gallery">
            <NuxtImg v-for="image in data.product.productImage" :src="image.url" :alt="image.alt"/>
        </div>
        <div class="product--info">
            <h1>
                {{ data.product.productTitle }}
            </h1>
            <p>
                {{ data.product.productPrice }}€
            </p>
            <div v-html="data.product.productDesc"></div>
        </div>
    </div>
</template>

<script setup>
import getProductSingle from '@/cms/queries/productSingle'

const route = useRoute()
const {data, pending, error} = await useLazyAsyncQuery(getProductSingle, {slug: route.params.slug})

</script>

<style lang="scss" scoped>
.product--container {
    display: flex;
    flex-basis: 50%;
    gap: 4rem;
    padding: 0 2rem;

    @media screen and (max-width: $desktop) {
        display: block;
        padding: 0;
    }

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

    .product--info {
        margin: 0 auto;
        padding: 0 1rem;
    }
}
</style>