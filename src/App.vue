<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/inline-component">Inline component</router-link> |
            <router-link to="/global-component">global and single file component</router-link> |
            <router-link to="/local-component">Local and inline component</router-link> |
            <router-link to="/parts-of-a-component">Parts</router-link> |
            <router-link to="/v-model">V-model</router-link> |
            <router-link to="/slots">slots</router-link> |
            <router-link to="/dynamic-components">dynamic components and mixins</router-link> |
            <router-link to="/example">example</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="postcss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2C3E50;
    text-align: center;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2C3E50;
}

#nav a.router-link-exact-active {
    color: #42B983;
}

.description {
    margin-top: 150px;
}

.description a {
    display: block;
    color: #42B983;
}
</style>
