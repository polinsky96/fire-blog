<template>
    <transition v-show="mobileActive" name="mobile-nav">                
        <div
            :class="{ 'navigation-mobile': mobile }" 
            class="navigation">
            <nav 
                :class="{ 'navigation__mobile-links': mobile }" 
                class="navigation__desktop-links">
                <router-link 
                    v-for="(link, idx) in links"
                    :key="idx"
                    :class="{ 'navigation__mobile-link': mobile }"
                    to="#"
                    class="navigation__desktop-link">{{link.name}}</router-link>
            </nav>
        </div>
    </transition> 
</template>

<script setup>
import { reactive, computed } from 'vue';

const props = defineProps({
    mobile: {
        type: Boolean,
        default: null,
        require: true
    },
    mobileNav: {
        type: Boolean,
        default: null,
        require: true 
    }
});

const mobileActive = computed(() => {
    if (props.mobile) {
        if (props.mobileNav) {
            return true;
        }
        
        return false;
    }

    return true;
})

//render links list
const links = reactive([
    {
        name: 'Home',
        path: '#'
    },
    {
        name: 'Blogs',
        path: '#'
    },
    {
        name: 'Create Post',
        path: '#'
    },
    {
        name: 'Login/Register',
        path: '#'
    }
]);
</script>

<style lang="scss" scoped>
.navigation {
    min-height: 100%;

    &__desktop {
        &-links {
            display: flex;
            align-items: center;
            min-height: 100%;
            padding: 0;
            margin: 0;
        }
    
        &-link {
            margin-right: 2rem;
            padding: 0 0.5rem;
            
            font-weight: 500;
            
            transition: 0.3s color ease;

            @include link-config;
            
            &:hover {
                color: #1eb8b8;
            }

            &:last-child {
                margin: 0;
            }
        }
    }

    &-mobile {
        position: fixed;
        top: 0;
        left: 0;

        max-width: 250px;
        width: 70%;
        background-color: $bg-accent-color;
    }

    &__mobile {
        &-links {
            flex-direction: column;
            align-items: start;
            padding: 1.25rem;
        }

        &-link {
            margin: 0;
            padding: 1rem 0;
            color: $light-font;
        }
    }

}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: all 0.3s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}
</style>