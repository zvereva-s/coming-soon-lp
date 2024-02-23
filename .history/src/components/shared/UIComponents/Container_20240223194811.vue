<template>
    <div class='container'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'ContainerComponent',
    }
</script>

<style lang="scss" scoped>
.container{
    padding: 8px 15px;
}
</style>