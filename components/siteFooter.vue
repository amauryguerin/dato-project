<template>
    <footer v-if="!pending">
        <nuxt-link to="/">
            <NuxtImg :src="data.siteFooter.siteLogoFooter.url" :alt="data.siteFooter.siteLogoFooter.alt"/>
        </nuxt-link>
        <div class="footer--submenus">
            <div v-for="submenu in data.siteFooter.footerSubmenuChoice">
                <h4>
                    {{ submenu.footerSubmenuTitle }}
                </h4>
                <ul>
                    <li v-for="singleSubmenu in submenu.footerSubmenu">
                        <nuxt-link :to="singleSubmenu.linkUrl">{{ singleSubmenu.linkTitle }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup>
import siteGlobal from '@/cms/queries/siteGlobal'
const {data, pending, error} = await useLazyAsyncQuery(siteGlobal)
</script>

<style scoped lang="scss">
footer {
    display: flex;
    gap: 4rem;
    padding: 4rem;
    background-color: $black;
    color: $white;

    .footer--submenus {
        display: flex;
        gap: 4rem;

        h4 {
            margin: 0;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem
        ;
            li {
                a {
                    font-family: $text;
                }
            }
        }
    }
}
</style>