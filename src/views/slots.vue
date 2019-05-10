<template>
    <div>
        <like-slots>
            <template v-slot="{likes}">
            {{likes}} patatas
            </template>

            <template #pretext>
                tienes 
            </template>
        </like-slots>
    </div>
</template>

<script>
import likeSlots from '@/components/like-slots.vue';

export default {
    name: 'Home',
    components: {
        likeSlots
    },

    data() {
        return {
            text: 'como me gusta:'
        };
    }
};









































//  <template #pretext>
//     {{ text }}
// </template>

// <template v-slot="{ likes }">
//     oh {{ likes }} mamamios!
// </template>
</script>
