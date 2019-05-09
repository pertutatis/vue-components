<template>
    <div>
        <h1>You have {{ likesVmodel }} likes</h1>
        <like-vmodel v-model="likesVmodel">
            V-model like
        </like-vmodel>
    </div>
</template>

<script>
import likeVmodel from '@/components/like-vmodel.vue';

export default {
    name: 'Home',
    components: {
        likeVmodel
    },

    data() {
        return {
            likesVmodel: 10
        };
    }
};
</script>

