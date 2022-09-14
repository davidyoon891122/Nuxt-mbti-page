<template>
    <div>
        <h1>{{page}}. {{question}}</h1>
        <Button v-for="(item, index) in answers"
            styleType="blue"
            :key="index"
            :text="item.text"
            :clickEvent="() => {
                $store.dispatch('clickButton', item.value)
            }"
        />
        <Progress />
    </div>
</template>
<script>
import Button from './Button.vue';
import Progress from './Progress.vue';

export default {
    components: { Button, Progress },
    computed: {
        page() {
            return this.$store.state.page
        },
        question() {
            return this.$store.state.questions[this.$store.state.page - 1].q
        },
        answers() {
            return this.$store.state.questions[this.$store.state.page - 1].a
        }
    },
    methods: {

    }
}
</script>
<style>
    
</style>