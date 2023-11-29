<template>
    <section class="shop">
        <h1>{{ route.params.slug }}</h1>
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
    width: 80%;

    h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .products--container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
}
</style>