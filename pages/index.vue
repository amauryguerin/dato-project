<template>
    <div v-if="!homePending" class="home">
        <product-carrousel :data="productFeaturedData" :pending="pFeaturedPending" :error="pFeaturedError"/>
        <product-row :data="homeData" :pending="homePending" :error="homeError"/>
    </div>
</template>

<script setup>
import home from '@/cms/queries/home'
const {data: homeData, pending: homePending, error: homeError} = await useLazyAsyncQuery(home)

import productFeatured from '@/cms/queries/productFeatured'
const {data: productFeaturedData, pending: pFeaturedPending, error: pFeaturedError} = await useLazyAsyncQuery(productFeatured)
</script>

<style lang="scss" scoped>
.home {
    h2 {
        font-size: 2rem;
    }

    &>*:not(.carousel) {
        padding: 0 6rem;
    }
}
</style>