<template>
    <nuxt-link v-for="product in dataAdapter()" class="product--card" :to="{ path: '/products/' + product.productSlug }"
    >
        <div class="product--img--container">
            <NuxtImg v-for="image in product.productImage" :src="image.url" :alt="image.alt"/>
        </div>
        <div>
            <h2> {{ product.productModel.modelName }} </h2>
            <p>{{ product.productDetail }} </p>
            <p>{{ product.productPrice }}€</p>
        </div>
    </nuxt-link>
</template>

<script setup>
const props = defineProps(['productGlobal', 'productFiltered']);

const dataAdapter = () => {
    if (props.productGlobal) {
        return props.productGlobal.allProducts;
    } else {
        return props.productFiltered;
    }
}
</script>

<style lang="scss">
.product--card {
    .product--img--container {
        padding: 1rem;
        background-color: $grey;
        margin-bottom: 1rem;

        img {
            margin: 0 auto;
        }
    }
}
</style>