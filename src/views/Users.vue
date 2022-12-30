<template>
 <div class="d-flex justify-content-between">
   <h4 class="p-4 text-light pb-3">کاربران </h4>
{{ this.$route.params.namee }}
   <i @click="this.$router.go(-1)" class="bi bi-arrow-left text-light m-3 " style="font-size: 30px; "></i>
 </div>
  <div class="px-3 pb-3">
  <div class=" col-12 bg-white  pt-3" style="border-radius: 3rem ; height: 680px; overflow-y: scroll; overflow-x: hidden; direction: ltr">

    <div class="row px-2" dir="rtl">
      <div class="col-6 mb-2">
        <div class="border border-4 text-center" style="height: 230px;border-radius: 4rem">
          <i class="bi bi-person-circle" style="font-size: 80px ;"></i>
          <p>محمد</p>
          <router-link to="/chat" @click="startChat('محمد')" class="btn bg-primary rounded rounded-pill text-light"> شروع گفتگو</router-link>
        </div>
      </div>
      <div class="col-6 mb-2">
        <div class="border border-4 text-center" style="height: 230px;border-radius: 4rem">
          <i class="bi bi-person-circle" style="font-size: 80px ;"></i>
          <p>علی</p>
          <router-link to="/chat" @click="startChat('علی')" class="btn bg-primary rounded rounded-pill text-light"> شروع گفتگو</router-link>
        </div>
      </div>
      <div class="col-6 mb-2">
        <div class="border border-4 text-center" style="height: 230px;border-radius: 4rem">
          <i class="bi bi-person-circle" style="font-size: 80px ;"></i>
          <p>رویا</p>
          <router-link to="/chat" @click="startChat('رویا')" class="btn bg-primary rounded rounded-pill text-light"> شروع گفتگو</router-link>
        </div>
      </div>


    </div>
  </div>

</div>
</template>

<script>
import router from "@/router";
import {useRouter} from "vue-router/dist/vue-router";
import {onMounted} from "vue";

export default {
  name: "Users",
  props:['name'],
  setup(){
    const router = useRouter();
    const startChat = (user) => {
      localStorage.setItem('chatWith', user);
    }
    onMounted(()=>{
      console.log(router.currentRoute.value.params);
      console.error(localStorage.getItem('userName'))
    });
    return{
      router, startChat
    }
  },


}
</script>

<style scoped>

</style>