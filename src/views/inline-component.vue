<template>
    <div>
        <like-inline />
    </div>
</template>

<script>
import Vue from 'vue';

Vue.component('likeInline', {
    data: function() {
        return {
            count: 0
        };
    },
    template: '<button v-on:click="count++">Like | {{ count }}</button>'
});

export default {
    name: 'Home'
};
</script>

