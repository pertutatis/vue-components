<template>
    <div>
        <like-local />
        <like-local />
        <like-local />
    </div>
</template>

<script>
const likeLocal = {
    data: function() {
        return {
            count: 0
        };
    },
    template: '<button v-on:click="count++">Like local | {{ count }}</button>'
};

export default {
    name: 'Home',
    components: {
        likeLocal
    }
};
</script>

