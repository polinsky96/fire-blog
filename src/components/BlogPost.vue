<template>
  <div :class="{ 'blogPost--dark': isWelcomeScreen }" class="blogPost">
    <div class="blogPost__wrapper">
        <div class="blogPost__content">
            <div class="blogPost__content-wrapper">
                <div class="blogPost__titles">
                    <h2 v-if="isWelcomeScreen" class="blogPost__title blogPost__title--light">{{ post.title }}</h2>
                    <h2 v-else class="blogPost__title">{{ post.title }}</h2>
                </div>
                <div class="blogPost__desription">
                    <p v-if="isWelcomeScreen" class="blogPost__text"> {{ post.blogPost }} </p>
                    <p v-else class="blogPost__content-preview"> {{ post.blogHTML }} </p>
                </div>
                <div class="blogPost__links">
                    <router-link v-if="isWelcomeScreen" to="#" class="blogPost__link blogPost__link--light">
                        LOGIN/REGISTER <ArrorIcon class="blogPost__arror-icon blogPost__arror-icon--light"/>
                    </router-link>
                    <router-link v-else to="#" class="blogPost__link">
                        VIEW THE POST <ArrorIcon class="blogPost__arror-icon"/>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="blogPost__images">
            <img v-if="isWelcomeScreen" :src="getImageUrl(post.photo)" class="blogPost__image" alt="home-image">
            <img v-else :src="getImageUrl(post.blogCoverPhoto)" class="blogPost__image" alt="post-image-preview">
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import ArrorIcon from '../assets/Icons/arrow-right-light.svg';

const props = defineProps({
    post: {
        type: Object,
        default: () => {
            return {
                title: null,
                blogHTML: null,
                blogCoverPhoto: null
            }
        }
    }
});

const isWelcomeScreen = computed(() => {
    return props.post.welcomeScreen;
});

const getImageUrl = (name) => {
  return new URL(`../assets/images/blogPhotos/${name}`, import.meta.url).href
}


</script>

<style lang="scss" scoped>
.blogPost {
    &--dark {
        background-color: $bg-accent-color;
    }

    &:nth-child(even) .blogPost__content {
        order: 1;
    }

    &__wrapper {
        display: flex;
        flex-direction: row;
        height: 40.625rem;

        @include main-box-shadow;

        @media (max-width: map_get($device-breakpoints, "tablet")) {
            flex-direction: column;
            height : auto;
        }
    }

    &__content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 23.4375rem;

        padding: 0 1.5rem;
        
        @media (max-width: map_get($device-breakpoints, "tablet")) {
            padding: 4.5rem 1.5rem;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;

        order: 0;

        @media (max-width: map_get($device-breakpoints, "tablet")) {
            order: 1;
        }
    }

    &__title {
        margin: 0;
        margin-bottom: 1.5rem;

        color: $dark-font;
        font-size: 2.5rem;
        font-weight: 300;
        text-transform: uppercase;

        &--light {
            color: $light-font;
        }
    }

    &__text, &__content-preview {
        font-size: 0.9375rem;
        font-weight: 300;
        line-height: 1.7;

        color: $light-font;
    }

    &__content-preview {
        color: $dark-font;
    }

    &__link {
        @include link-config;

        display: inline-flex;
        align-items: center;
        margin-top: 2rem;
        padding-bottom: 0.25rem;
        border-bottom: 0.0625rem solid transparent;
        transition: all .5s ease-in;
        
        &--light {
            color: $light-font;
        }

        &:hover {
            border-bottom: 0.0625rem solid $light-font;
        }
    }
    
    &__arror-icon {
        margin-left: 0.5rem;
        width: 0.75rem;

        color: $dark-font;

        &--light {
            color: $light-font;
        }
    }

    &__images {
        flex: 3;

    }
    
    &__image {
        max-width: 100%;
        min-height: 100%;
        object-fit: cover;
        object-position: center;

        @include main-box-shadow;
    }
}
</style>