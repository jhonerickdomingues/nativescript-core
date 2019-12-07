<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout>
            <Button text="Teste" class="button" @tap="$navigateTo(Teste)" />
            <Button text="Teste2 " class="button2" @tap="$navigateTo(Teste2)" />
        </GridLayout>
    </Page>
</template>

<script>
    import Teste from '../components/Teste'
    import Teste2 from '../components/Teste2'

  export default {
        data(){
            return {
                Teste,
                Teste2
            }
        },
        methods:{

        }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .button{
        width: 200;
        height: 50;
    }

    .button2{
        margin-top:100;
        width: 200;
        height: 50;
    }
</style>
