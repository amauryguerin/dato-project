<template>
    <product-archive v-if="!productByCategoryPending && !productByModelPending "
                     :productFiltered="getFilteredProducts()" :pageName="getFilteredProducts" :isCategoryArchive="isCategoryArchive"/>
</template>

<script setup>
const route = useRoute()

import getProductByCategory from '~/cms/queries/archiveCategory'

const {
    data: productByCategory,
    pending: productByCategoryPending,
    error: productByCategoryError
} = await useLazyAsyncQuery(getProductByCategory, {slug: route.params.slug})

import getProductByModel from '~/cms/queries/archiveModel'

const {
    data: productByModel,
    pending: productByModelPending,
    error: getProductByModelError
} = await useLazyAsyncQuery(getProductByModel, {slug: route.params.slug})

let isCategoryArchive = false;
const getFilteredProducts = () => {
    const filteredProducts = productByCategory.value.allProducts.filter(product => {
        const productCategories = product.productCategory;
        const matchesCategory = productCategories.some(category => category.category.categorySlug === route.params.slug);
        if (matchesCategory) {
            isCategoryArchive = true;
        }
        return matchesCategory;
    });
    if (filteredProducts.length === 0) {
        const matchesModel = productByModel.value.allProducts.filter(model => model.productModel.modelSlug === route.params.slug);
        return matchesModel;
    } else {
        return filteredProducts
    }
}
</script>

<style scoped lang="scss">
</style>