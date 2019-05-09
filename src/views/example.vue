<template>
    <div class="form">
        <div class="form--group">
            <label>
                <span>Contraseña</span>
                <input v-model="pass" :type="type">
            </label>
            <button @click="toggleVisibility">toggle</button>
        </div>

        <div class="form--group">
            <label>
                <span>Repita contraseña</span>
                <input v-model="rePass" :type="type">
            </label>
            <button @click="toggleVisibility">toggle</button>
        </div>

        <div class="form--group">
            <label>
                <span>Nueva Contraseña</span>
                <input v-model="newPass" :type="type">
            </label>
            <button @click="toggleVisibility">toggle</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',

    data() {
        return {
            type: 'password',
            pass: '',
            rePass: '',
            newPass: ''
        };
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
};
</script>

<style scoped>
.form {
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
}

.form--group {
    flex: 0 0 30%;
    text-align: left;
}

input {
    display: block;
    width: 100%;
}
</style>


