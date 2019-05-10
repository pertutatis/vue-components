<template>
    <div>
        <h1>You have {{ likes }} likes</h1>
        <like :counter-start="likesInit" @updateLikes="updateLikes">
            importante
        </like>

        <div class="description">
            <a href="https://vuejs.org/v2/guide/components-props.html">More info</a>
        </div>
    </div>
</template>

<script>
import like from '@/components/like.vue';

export default {
    name: 'Home',
    components: {
        like
    },

    data() {
        return {
            likesInit: 10,
            likes: 10
        };
    },

    methods: {
        updateLikes(newLikes) {
            this.likes = newLikes;
        }
    }
};
</script>

<style lang="postcss" scoped>
    h1 {
        color: #42b983;
    }
</style>

