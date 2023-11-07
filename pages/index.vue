<template>
    <div class="home">
        <div class="product--newest">
            <h2>Nouveautés</h2>
            <div class="products--container">
                <product-card />
            </div>
        </div>
        <div class="product--newest">
            <h2>Nike Air Jordan 1</h2>
            <div class="products--container">
                <product-card />
            </div>
        </div>
        <div class="product--newest">
            <h2>Nike Air Max 1</h2>
            <div class="products--container">
                <product-card />
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.home {
    padding: 0 6rem;
    .products--container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
}
</style>