<template>
    <header>
        <nuxt-link to="/">
            <img src="~assets/images/gofast-logo.png">
        </nuxt-link>
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/">Nouveautés</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Sneakers</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Soldes</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script></script>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid $black;
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
                    font-family: $display;
                    font-size: 2rem;
                    color: inherit;
                    text-decoration: none;
                    letter-spacing: 0.1rem;
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