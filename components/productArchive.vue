<template>
    <section class="shop">
        <Head v-if="!productSeoPending">
            <Title v-if="!route.params.slug">{{ route.matched[0].components.default.__name }}</Title>
            <Title v-else>{{ getFilteredProductSeo().title }}</Title>
            <Meta name="description" :content="getFilteredProductSeo().description"/>
            <Meta name="ogTitle" :content="getFilteredProductSeo().title"/>
            <Meta name="ogDescription" :content="getFilteredProductSeo().description"/>
            <Meta name="ogImage" :content="getFilteredProductSeo().image ? getFilteredProductSeo().image.url : ''"/>
        </Head>
        <h1 v-if="!route.params.slug">{{ route.matched[0].components.default.__name }}</h1>
        <h1 v-else>{{ getFilteredProductSeo().title }}</h1>
        <div class="products--container">
            <product-card :productGlobal="productGlobal" :productFiltered="productFiltered"/>
        </div>
    </section>
</template>

<script setup>
const route = useRoute()
const props = defineProps(['productFiltered', 'productGlobal', 'isCategoryArchive'])

import getProductSeo from '~/cms/queries/productSeo'

const {data: productSeo, pending: productSeoPending, error: productSeoError} = await useLazyAsyncQuery(getProductSeo)
const getFilteredProductSeo = () => {
    if (props.isCategoryArchive && productSeo.value && productSeo.value.allProductCategories) {
        const currentCategorySlug = route.params.slug
        const filteredProductSeo = productSeo.value.allProductCategories.filter(category => category.categorySlug === currentCategorySlug)
        return filteredProductSeo[0].categorySeo
    } else if (!props.isCategoryArchive && productSeo.value && productSeo.value.allProductModels) {
        const currentModelSlug = route.params.slug
        const filteredProductSeo = productSeo.value.allProductModels.filter(model => model.modelSlug === currentModelSlug)
        return filteredProductSeo.length > 0 ? filteredProductSeo[0].modelSeo : {};
    }
    return {};
}
</script>

<style scoped lang="scss">
.shop {
    width: 100%;
    max-width: $desktop;
    margin: 0 auto;

    @media screen and (max-width: $desktop) {
        padding: 0 1rem;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .products--container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;

        @media screen and (max-width: $desktop) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: $tablet) {
            grid-template-columns: 1fr;
        }
    }
}
</style>