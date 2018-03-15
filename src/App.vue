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
        font-size: 20px;
    }
</style>
