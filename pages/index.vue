<template>
    <seo-adapter v-if="!homePending" :productSEO="homeData.home.homeSeo"/>
    <div v-if="!homePending" class="home">
        <product-carrousel :data="productFeaturedData" :pending="productFeaturedPending"/>
        <product-row :data="homeData"/>
    </div>
</template>

<script setup>
import getHome from '@/cms/queries/home'

const {data: homeData, pending: homePending, error: homeError} = await useLazyAsyncQuery(getHome)

import getProductFeatured from '@/cms/queries/productFeatured'

const {
    data: productFeaturedData,
    pending: productFeaturedPending,
    error: productFeaturedError
} = await useLazyAsyncQuery(getProductFeatured)
</script>

<style lang="scss" scoped>
.home {
    h2 {
        font-size: 2rem;
    }

    :not(.carousel) {
        @media screen and (max-width: $desktop) {
            padding: 0 1rem;
        }
    }
}
</style>