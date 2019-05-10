<template>
    <div class="form">
        <inputcustom v-model="pass">Contraseña</inputcustom>
        <inputcustom v-model="rePass">Repita Contraseña</inputcustom>
        <inputcustom v-model="newPass">Nueva Contraseña</inputcustom>
    </div>
</template>

<script>
import inputcustom from '@/components/input.vue';

export default {
    name: 'Home',
    components: {
        inputcustom
    },

    data() {
        return {
            pass: '',
            rePass: '',
            newPass: ''
        };
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


