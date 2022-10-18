<template>
    <header class="header">
        <div class="container">
                <div class="header__wrapper">
                <div class="header__branding">
                    <router-link class="header__branding-link" :to="{ name: 'home' }">FireBlogs</router-link>
                </div>
                <NavigationItem
                    :mobileNav="mobileNav" 
                    :mobile="mobile"/>
                <MenuIcon v-show="mobile" @click="toggleMobileNav" class="header__menu-icon"/>
            </div>
        </div>
    </header>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NavigationItem from '../components/NavigationItem.vue';
import MenuIcon from '../assets/Icons/bars-regular.svg';

const mobile = ref(null);
const mobileNav = ref(null);
const windowWidth = ref(null);

const checkScreen = () => {
    windowWidth.value = window.innerWidth;

    if (windowWidth.value <= 575) {
        mobile.value = true;
        return;
    }

    mobile.value = false;
    mobileNav.value = false;
}

onMounted(() => {
    window.addEventListener('resize', checkScreen);
    checkScreen();
})

const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
}
</script>

<!-- <script>
import NavigationItem from '../components/NavigationItem.vue';
import MenuIcon from '../assets/Icons/bars-regular.svg';

export default {
    name: 'header-item',

    components: {
        MenuIcon,
        NavigationItem
    },

    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null
        }
    },

    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;

            if (this.windowWidth <= 575) {
                this.mobile = true;
                return;
            }

            this.mobile = false;
            this.mobileNav = false;
        },

        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        }
    },

    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    }
}
</script> -->

<style lang="scss" scoped>
.header {
    position: relative;
    z-index: 99;

    height: 69px;
    padding: 0 1.562rem;

    background-color:#ffffff;

    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);

    &__wrapper {
        display: flex;
        justify-content: space-between;
        min-height: 100%;
    }

    &__navigation-desktop {
        flex: 1 1 100%;
    }

    &__branding {
        display: flex;
        align-items: center;
    }

    &__branding-link {
        font-weight: 600;
        font-size: 1.5rem;
        color: #000000;
        text-decoration: none;
    }

    &__menu-icon {
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 1.562rem;
        transform: translateY(-50%);

        width: auto;
        height: 1.562rem;
    }
}
</style>