<template>
    <carousel v-if="!pending" :autoplay="4000" wrapAround pauseAutoplayOnHover>
        <slide v-for="product in data.allProducts" :key="product.id">
            <nuxt-link :to="{ path: '/products/' + product.productSlug }">
                <NuxtImg v-for="image in product.productImage" :src="image.url" :alt="image.alt"/>
            </nuxt-link>
        </slide>
        <template #addons>
            <navigation/>
            <pagination/>
        </template>
    </carousel>
</template>

<script setup>
const props = defineProps(['data', 'pending', 'error']);

</script>

<style lang="scss" scoped>
.carousel {
    background-color: $grey;
    padding: 2rem 0;
}
</style>