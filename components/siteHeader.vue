<template>
    <header v-if="!pending">
        <nuxt-link to="/">
            <NuxtImg :src="data.siteHeader.siteLogo.url" :alt="data.siteHeader.siteLogo.alt"/>
        </nuxt-link>
        <nav class="site--menu">
            <ul>
                <li v-for="link in data.siteHeader.siteMenu">
                    <nuxt-link :to="link.linkUrl">{{ link.linkTitle }}</nuxt-link>
                </li>
            </ul>
        </nav>
        <svg class="toggleMenu" @click="toggleMenu" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="34px" height="27px" viewBox="0 0 34 27" enable-background="new 0 0 34 27" xml:space="preserve">
            <rect fill="#00000" width="34" height="4"/>
            <rect y="11" fill="#00000" width="34" height="4"/>
            <rect y="23" fill="#00000" width="34" height="4"/>
        </svg>
        <nav class="site--menu__responsive">
            <div class="closeMenu" @click="closeMenu">X</div>
            <ul>
                <li>
                    <nuxt-link to="/">
                        <NuxtImg :src="data.siteHeader.siteLogo.url" :alt="data.siteHeader.siteLogo.alt"/>
                    </nuxt-link>
                </li>
                <li v-for="link in data.siteHeader.siteMenu">
                    <nuxt-link :to="link.linkUrl">{{ link.linkTitle }}</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import siteGlobal from '@/cms/queries/siteGlobal'

const {data, pending, error} = await useLazyAsyncQuery(siteGlobal)

const toggleMenu = () => {
    let toggleMenu = document.querySelector(".toggleMenu")
    toggleMenu.style.display = "none"
    let responsiveMenu = document.querySelector(".site--menu__responsive")
    responsiveMenu.style.display = "block"
}

const closeMenu = () => {
    let closeMenu = document.querySelector(".site--menu__responsive")
    closeMenu.style.display = "none"
    let toggleMenu = document.querySelector(".toggleMenu")
    toggleMenu.style.display = "block"
}
</script>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 1rem 4rem;
    margin: 0 auto;

    @media screen and (max-width: $desktop) {
        padding: 1rem;
    }

    .toggleMenu {
        display: none;
        @media screen and (max-width: $desktop) {
            display: block;
        }
    }

    .closeMenu {
        font-size: 2rem;
        text-align: right;
    }

    .site--menu {
        @media screen and (max-width: $desktop) {
            display: none;
        }

        ul {
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

    .site--menu__responsive {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 100;
        height: 100vh;
        background-color: #f5f5f5;
        padding: 4rem;

        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            li {
                font-size: 2rem;
            }
        }
    }
}
</style>