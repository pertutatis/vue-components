<template>
    <div>
        <like-global />
    </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import likeGlobal from '@/components/like-global.vue';

Vue.component('likeGlobal', likeGlobal);

export default {
    name: 'GlobalComponent'
};
</script>
