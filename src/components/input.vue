<template>
    <div class="form--group">
        <label>
            <span><slot></slot></span>
            <input v-model="pass" :type="type">
        </label>
        <button @click="toggleVisibility">toggle</button>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            type: 'password',
            pass: this.value
        }
    },

    watch: {
        pass() {
            this.$emit('input', this.pass);
        }
    },

     methods: {
        toggleVisibility() {
            const toggle = {
                password: 'text',
                text: 'password'
            };

            this.type = toggle[this.type];
        }
    }
}
</script>
