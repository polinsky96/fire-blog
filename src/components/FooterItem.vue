<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__left-section">
                    <div class="footer__col-1">
                        <BrandingIcon class="footer__branding-icon" />
                        <ul class="footer__social-media-links">
                            <li class="footer__social-media-item">
                                <a href="#" class="footer__social-media-link">
                                    <youTube class="footer__svg-icon" />
                                </a>
                            </li>
                            <li class="footer__social-media-item">
                                <a href="#" class="footer__social-media-link">
                                    <twitter class="footer__svg-icon" />
                                </a>
                            </li>
                            <li class="footer__social-media-item">
                                <a href="#" class="footer__social-media-link">
                                    <instagram class="footer__svg-icon" />
                                </a>
                            </li>
                            <li class="footer__social-media-item">
                                <a href="#" class="footer__social-media-link">
                                    <linkedin class="footer__svg-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__col-2">
                        <ul class="footer__nav">
                            <router-link class="footer__nav-link" to="#">Home</router-link>
                            <router-link class="footer__nav-link" to="#">Blogs</router-link>
                            <router-link class="footer__nav-link" to="#">Create Post</router-link>
                            <router-link class="footer__nav-link" to="#">Login In / Register</router-link>
                        </ul>
                    </div>
                </div>
                <div class="footer__right-section">
                    <p class="footer__copyright-text">Copyright 2022 All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import BrandingIcon from './BrandingIcon.vue';

import youTube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
</script>

<style lang="scss" scoped>
@mixin flex-column {
    display: flex;
    flex-direction: column;
}

.footer {
    margin-top: auto;
    padding: 6.25rem 1.5625rem;

    background-color: $bg-accent-color;

    &__wrapper {
        display: flex;

        @media (max-width: map_get($device-breakpoints, "tablet")) {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
    }

    &__left-section,
    &__right-section {
        flex-grow: 1;
    }

    &__left-section {
        display: flex;

        @media (max-width: map_get($device-breakpoints, "tablet")) {
            flex-direction: column;
            gap: 2rem;
        }
    }

    &__right-section {
        @include flex-column;
        justify-content: flex-end;
        align-items: flex-end;
    }

    &__col-1,
    &__col-2 {
        flex-grow: 1;
    }

    &__col-1 {
        @include flex-column;

        @media (max-width: map_get($device-breakpoints, "tablet")) {
            align-items: center;
            gap: 2rem;
        }
    }

    &__branding-icon {
        flex-grow: 1;
        color: $light-font;
    }

    &__social-media-links {
        display: flex;
        padding: 0;
        margin: 0;
    }

    &__social-media-item {
        margin-right: 1rem;

        list-style-type: none;
    }

    &__svg-icon {
        height: 1.5rem;

        color: $light-font;
    }

    &__nav {
        @include flex-column;
        gap: 1rem;
        padding: 0;
        margin: 0;

        @media (max-width: map_get($device-breakpoints, "tablet")) {
            flex-direction: row;
        }
    }

    &__nav-link {
        @include link-config;

        color: $light-font;
    }

    &__copyright-text {
        margin: 0;

        color: $light-font;
    }
}
</style>
