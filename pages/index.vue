<template>
    <div v-if="!homePending" class="home">
        <product-carrousel :data="productFeaturedData" :pending="pFeaturedPending" :error="pFeaturedError"/>
        <product-row :data="homeData" :pending="homePending" :error="homeError"/>
    </div>
</template>

<script setup>
import getHome from '@/cms/queries/home'
const {data: homeData, pending: homePending, error: homeError} = await useLazyAsyncQuery(getHome)

import getProductFeatured from '@/cms/queries/productFeatured'
const {data: productFeaturedData, pending: pFeaturedPending, error: pFeaturedError} = await useLazyAsyncQuery(getProductFeatured)
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