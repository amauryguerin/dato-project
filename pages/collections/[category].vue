<template v-if="!productByCategoryPending">
    <section class="shop">
        <div class="products--container">
        </div>
    </section>
</template>

<script setup>
import getProductByCategory from '~/cms/queries/archiveCategory.js'
const route = useRoute()
const {data: productByCategory, pending: productByCategoryPending, error} = await useLazyAsyncQuery(getProductByCategory, {slug: route.params.category})
const getFilteredProduct = () => {
    const filteredProducts = productByCategory.value.allProducts.filter(product => {
        const productCategories = product.productCategory;
        const matchesCategory = productCategories.some(category => category.category.categorySlug === route.params.category);
        return matchesCategory;
    });
    return filteredProducts;
}
</script>

<style scoped lang="scss">
</style>