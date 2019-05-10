<template>
    <div>
        <a href="#" @click="componentId = 'component1'">component1</a> |
        <a href="#" @click="componentId = 'component2'"> component2</a> |
        <a href="#" @click="componentId = 'component3'"> component3</a>

        <component :is="componentId"></component>
    </div>
</template>

<script>
const mixin = {
    template: '<h1>I am component {{id}}</h1>',
};

const component1 = {
    mixins: [mixin],
    data() {
        return {
            id: 1
        }
    },
    template: '<h1>I am realy component {{id}}</h1>',
};

const component2 = {
    mixins: [mixin],
    data() {
        return {
            id: 2
        }
    },
};

const component3 = {
    mixins: [mixin],
    data() {
        return {
            id: 3
        }
    },
};

export default {
    name: 'Home',
    components: {
        component1,
        component2,
        component3
    },

    data() {
        return {
            componentId: 'component1'
        }
    },
};
</script>

