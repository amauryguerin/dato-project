<template>
    <section v-if="!productsPending" v-for="section in data.home.homeSection">
        <h2 v-if="section.__typename==='SectionCategoryRecord'">{{ section.category.categoryName }}</h2>
        <h2 v-else>{{ section.model.modelName }}</h2>
        <div class="products--container">
            <product-card :productFiltered="getFilteredProducts(section)"/>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['data']);

import getAllProducts from '~/cms/queries/allProducts.js';

const {data: productsData, pending: productsPending, error: productsError} = await useLazyAsyncQuery(getAllProducts);
const getFilteredProducts = (section) => {
    if (section.__typename === 'SectionCategoryRecord') {
        const currentCategoryName = section.category.categoryName;
        const filteredProducts = productsData.value.allProducts.filter(product => {
            const productCategories = product.productCategory;
            const matchesCategory = productCategories.some(category => category.category.categoryName === currentCategoryName);
            return matchesCategory;
        });
        return filteredProducts;

    } else {
        const currentModelName = section.model.modelName;
        const filteredProducts = productsData.value.allProducts.filter(product => product.productModel.modelName === currentModelName);
        return filteredProducts;

    }
};
</script>

<style scoped lang="scss">

section {
    max-width: $desktop;
    margin: 0 auto;

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