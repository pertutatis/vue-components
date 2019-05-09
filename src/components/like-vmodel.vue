<template>
    <button @click="updateCount">
        <slot>Like</slot>
         | {{ value }}
    </button>
</template>

<script>
export default {
    name: 'Like',

    props: ['value'],

    methods: {
        updateCount() {
            this.$emit('input', this.value + 1);
        }
    }
};
</script>
