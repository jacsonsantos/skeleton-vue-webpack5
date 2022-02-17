<template>
    <div id="home-page">
        <hello-world></hello-world>
    </div>
</template>

<script>
import HelloWorld from '@/components/shared/hello-world.vue'

export default {
    name: 'home-page',
    components: {
        HelloWorld
    },
    data() {
        return {}
    },
    created() {
        //
    }
}
</script>

<style lang="scss" scoped>
#home-page {
    //
}
</style>