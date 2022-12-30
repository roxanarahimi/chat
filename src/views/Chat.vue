<template>
  <div class="col-10 ps-0 bg-primary">
    <div>
      <div class="d-flex justify-content-between">
        <h4 class="p-4 text-light pb-3">گفتگو با <span class="them"></span> </h4>
        <i @click="this.$router.go(-1)" class="bi bi-arrow-left text-light m-3 "
           style="font-size: 30px; margin-left: -54px !important; z-index: 1000 "></i>
      </div>
      <div class="my-3 p-3 px-2 bg-white border border-white border-3 p-4 msg_history"
           style="height: 610px; border-radius: 2rem; overflow-y: scroll ; direction: ltr ">

        <div>
          <div v-if="them" v-for="item in allMsgs" :key="item.message" :class="{'sent':item.sender === me, 'received':item.sender === them}">
            <div class="inner  rounded rounded-pill mb-3" :class="{'bg-primary':item.sender === me, 'bg-secondary':item.sender === them}">
              {{ item.message }}
            </div>
          </div>
<!--          <div class="received ">-->
<!--            <div class="inner bg-secondary rounded rounded-pill  mb-3">سلام</div>-->
<!--          </div>-->
        </div>
      </div>

      <div class="px-1 mb-4">
        <form @submit.prevent="saveMsg">
          <input  type="text" v-model="message" style="height: 50px" class="form-control border-0 rounded rounded-pill"
                 placeholder="پیام خود را بنویسید ..."
                 id="">
        </form>
      </div>

    </div>
  </div>
  <div class="col-2 px-0  bg-primary " style="padding-top: 120px">
    <div style="height:625px; overflow-y: scroll; overflow-x: hidden; direction: rtl ; color: whitesmoke !important">
      <div style="">
        <div class=" bg-white p-2 text-black-50" style="border-radius: 30px 0 0 30px  ">
          <i style="font-size: 35px" class=" bi bi-person-circle"></i>
          <div class="">
            <small class=" mb-0 them">نامکاربری</small>

            <!--            <p class="mb-2">پیام...</p>-->
          </div>
        </div>


      </div>
    </div>

  </div>


</template>

<script>
// @ is an alias to /src

import { collection, addDoc, where,orderBy, query, onSnapshot, doc } from "firebase/firestore";

export default {
  name: 'Chat',
  data(){
    return{
      me:'',
      them: '',
      message: '',
      allMsgs: [],
    }
  },
  mounted() {
    console.log(localStorage)
    this.me = localStorage.getItem('userName')
    this.them = localStorage.getItem('chatWith')
    console.log( this.me,  this.them)
    document.querySelectorAll('.them').forEach(el=>{
    el.innerText =  this.them;
    })
  },
  created() {
    this.getMsgs();
  },
  methods:{
    scrollBottom(){
setTimeout(()=>{
  document.querySelector('.msg_history').scrollTop = document.querySelector('.msg_history').scrollHeight;

},1000)
    },
    saveMsg(){
      try {
        const docRef =  addDoc(collection(db, "chat"), {
          message: this.message,
          sender: this.me,
          receiver: this.them,
          createdAt: new Date(),
        });
        this.getMsgs();
        // console.log("Document written with ID: ", docRef.id);
        this.message = '';
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.scrollBottom();

    },
   async getMsgs(){

     const q = query(collection(db, "chat"), orderBy('createdAt'));
     const unsubscribe = onSnapshot(q, (querySnapshot) => {
       this.allMsgs  = [];
       querySnapshot.forEach((doc) => {
         if (doc.data().sender === this.me){
           if (doc.data().receiver === this.them){
             this.allMsgs.push(doc.data());

           }
         }else if(doc.data().sender === this.them){
           if (doc.data().receiver === this.me){
             this.allMsgs.push(doc.data());
           }
           }
       });

     });

     this.scrollBottom();
    },

  },
  
  
}

</script>
<style>
.sent {
  direction: rtl;
}

.sent .inner {
  min-width: 20px;
  max-width: 250px;
  display: inline-block;
  padding: 20px 30px;
  color: white;
}

.received {
  direction: ltr;
}

.received .inner {
  min-width: 20px;
  max-width: 250px;
  display: inline-block;
  padding: 20px 30px;
  color: white;
}


</style>