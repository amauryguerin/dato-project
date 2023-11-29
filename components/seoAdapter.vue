<template>
</template>
<script setup>
const props = defineProps(['productSEO'])

useHead({
    title: `${props.productSEO.title}`,
    meta: [
        {name: 'description', content: `${props.productSEO.description}`},
        {property: 'og:title', content: `${props.productSEO.title}`},
        {property: 'og:image', content: `${props.productSEO.image.url}`}
    ],
})
</script>