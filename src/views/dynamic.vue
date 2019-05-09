<template>
    <div>
        <a href="#">component1</a> |
        <a href="#"> component2</a> |
        <a href="#"> component3</a>

    </div>
</template>

<script>
const component1 = {
    template: '<h1>I am component 1</h1>',
};

const component2 = {
    template: '<h1>I am component 2</h1>'
};

const component3 = {
    template: '<h1>I am component 3</h1>'
};

export default {
    name: 'Home',
    components: {
        component1,
        component2,
        component3
    }
};
</script>

