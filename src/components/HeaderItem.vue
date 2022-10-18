<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__branding">
                    <BrandingIcon/>
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
import BrandingIcon from '../components/BrandingIcon.vue';

const mobile = ref(null);
const mobileNav = ref(null);
const windowWidth = ref(null);

const mobileWindowBreakPoint = 575;

const checkScreen = () => {
    windowWidth.value = window.innerWidth;

    if (windowWidth.value <= mobileWindowBreakPoint) {
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

<style scoped lang="scss">
.header {
    position: relative;
    z-index: 99;

    height: 90px;
    padding: 0 1.562rem;

    background-color: $bg-light-color;

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
        color: $dark-font;
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