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

 @import '../../../assets/scss/variables.scss';
      .wrapper{
        min-height: 100vh;
          width: 100%;
        background-image: url('../assets/images/kyiv-1x.jpg'), linear-gradient(to top, $black-soft 20%, $black-mute 80%);
            background-repeat: no-repeat;
            background-size: contain;
            background-position-x: right;}
    </style>