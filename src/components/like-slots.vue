<template>
    <button @click="count++">
        <slot name="pretext">you have </slot>
        <slot :likes="count">{{ count }} likes.</slot>
    </button>
</template>

<script>
export default {
    name: 'LikeGlobal',
    data: function() {
        return {
            count: 0,
            text: 'adios:',
            endText: 'mamamios'
        };
    }
};
</script>
