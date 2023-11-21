<template>
        <h2>Hello test</h2>

    <router-link :to="{'name':'Home'}">Home</router-link>

        <router-view/>
</template>


<script>
    export default{
        name:'App'
    }

</script>
