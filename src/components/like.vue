<template>
    <button @click="updateCount">
        <slot>Like</slot>
         | {{ count }}
    </button>
</template>

<script>
export default {
    name: 'Like',

    props: ['counterStart'],

    data: function() {
        return {
            count: this.counterStart
        };
    },

    methods: {
        updateCount() {
            this.count += 1;
            this.$emit('updateLikes', this.count);
        }
    }
};
</script>
