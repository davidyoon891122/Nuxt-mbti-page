<template>
    <a @click.prevent="clickEvent">
        {{text}}
    </a>
</template>
<script>
export default {
    props: {
        clickEvent: {
            type: Function
        },
        text: {
            type: String,
            default: ""
        }
    }
}
</script>
<style>
    
</style>