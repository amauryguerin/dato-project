<template>
    <NuxtLayout/>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: $text;
}

h1, h2, h3, h4, h5, h6 {
    font-family: $display;
}

p {
    font-family: $text;
    line-height: 2;
}

img {
    display: block;
    max-width: 100%;
}

ul {
    padding: 0;
    list-style-type: none;
}

a {
    color: inherit;
    text-decoration: none;
    letter-spacing: 0.1rem;
    font-family: $display;
}
</style>