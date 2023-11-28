<template>
    <div class="shop--container">
        <aside class="shop--filters">
            <div>
                <p>Filtres</p>
            </div>
        </aside>
        <section class="shop">
            <h1>Sneakers</h1>
            <div class="products--container">
                <product-card/>
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
.shop--container {
    display: flex;

    aside,
    section {
        padding: 2rem 1rem;;
    }

    aside {
        width: 20%;
    }

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
}
</style>