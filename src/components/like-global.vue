<template>
    <button @click="count++">Like global | {{ count }}</button>
</template>

<script>
export default {
    name: 'LikeGlobal',
    data: function() {
        return {
            count: 0
        };
    }
};
</script>
