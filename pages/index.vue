<template>
    <div class="home">
        <product-carrousel />
        <div v-for="section in data.home.homeSection" class="test">
            <h2 v-if="section.__typename==='SectionCategoryRecord'">{{ section.category.categoryName }}</h2>
            <h2 v-else>{{ section.model.modelName }}</h2>
            <div class="products--container">
                <product-card />
            </div>
        </div>
    </div>
</template>

<script setup>
import home from '@/cms/queries/home'

const {data, pending, error} = await useLazyAsyncQuery(home)
</script>

<style lang="scss" scoped>
.home {
    h2 {
        font-size: 2rem;
    }

    &>*:not(.carousel) {
        padding: 0 6rem;
    }

    .products--container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
}
</style>