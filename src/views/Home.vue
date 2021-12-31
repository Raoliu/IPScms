<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{$t(`message.Home`)}}</p>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div @click="change('zh')">中文</div>
    <div @click="change('en')">English</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getCurrentInstance } from "vue";
import { useI18n } from 'vue-i18n'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(){
    const { proxy } = getCurrentInstance();
    function change(type) {
      proxy.$i18n.locale = type;
    }
    const { t } = useI18n()
    console.log(t('message.pagesDes'))
    return { change };
  },
}
</script>
