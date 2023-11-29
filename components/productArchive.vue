<template>
    <section class="shop">
        <h1 v-if="Object.keys(route.params).length === 0">Toutes nos sneakers</h1>
        <h1 v-else>{{ route.params.slug }}</h1>
        <div class="products--container">
            <product-card :productGlobal="productGlobal" :productFiltered="productFiltered"/>
        </div>
    </section>
</template>

<script setup>
const route = useRoute();
const props = defineProps(['productFiltered', 'productGlobal']);

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