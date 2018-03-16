<template>
    <div class="container">
        {{greeting}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                greeting: "hello"
            };
        },
        methods: {},
        components: {}
    };
</script>

<style>
    .container {
        display: flex;
        font-size: 20px;
        box-shadow: 0 0 0 #000;
        transition:transform .15s ease-out;
    }
</style>
