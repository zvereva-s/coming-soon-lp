<template>
     <div class='wrapper'>
    <ContainerComponent>
    <HeaderComponent />
<slot></slot>
</ContainerComponent>
    </div>
</template>

<script>
 import HeaderComponent from '@/components/HeaderComponent.vue';
  import ContainerComponent from '@/components/UIComponents/Container.vue';

    export default {
        name:'LayoutComponent',
components:{
    HeaderComponent,
    ContainerComponent
}
    }
</script>

<style lang="scss" scoped>

</style>