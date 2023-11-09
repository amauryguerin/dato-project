<template>
    <header v-if="!pending">
        <nuxt-link to="/">
            <NuxtImg :src="data.siteHeader.siteLogo.url" />
        </nuxt-link>
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/">Nouveautés</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/sneakers">Sneakers</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Soldes</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import siteGlobal from '@/cms/queries/siteGlobal'
const { data, pending, error } = await useLazyAsyncQuery(siteGlobal)
console.log(data);
</script>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 1rem 4rem;
    margin: 0 auto;

    nav {
        ul {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 2rem;

            li {
                a {
                    font-size: 1.5rem;
                    position: relative;

                    &::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 4px;
                        border-radius: 4px;
                        background-color: #18272F;
                        bottom: 0;
                        left: 0;
                        transform-origin: right;
                        transform: scaleX(0);
                        transition: transform .3s ease-in-out;
                    }

                    &:hover {
                        &::after {
                            transform-origin: left;
                            transform: scaleX(1);
                        }
                    }
                }
            }
        }
    }
}
</style>