<template>

  <div style="margin-top: 250px; height: 250px; width: 250px; border-radius: 4rem" class="bg-light p-5 mx-auto">
    <h3>ورود به چت</h3>
    <form @submit.prevent="enterChat">
      <label for="name"/>
      <input type="text" placeholder="نام شما ... " id="name" v-model="name"
             class="py-3 border-0 rounded rounded-pill form-control mb-3">
      <input class="btn bg-primary rounded rounded-pill text-light " type="submit" value="ورود">
    </form>
  </div>


</template>

<script>
// @ is an alias to /src

import {ref} from "vue";
import {useRouter} from "vue-router/dist/vue-router";

export default {
  name: 'HomeView',
  components: {},
  setup() {
    const name = ref('');
    const router = useRouter();
    const enterChat = () => {
      (name.value !== '' && name.value !== null)
          ?
          (
              router.push({name: 'Users', params: {name: name.value}}),
              localStorage.clear(),
              localStorage.setItem('userName', name.value)
          )
          :
          alert('وارد کردن نام الزامی است');
      name.value = '';
    }
    return {
      name, enterChat, router
    }
  }
}
</script>
