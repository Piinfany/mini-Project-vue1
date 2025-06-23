<template>
    <section>
        <!-- <h1>Piinfany Studio</h1> -->
      <!-- <h1>ชื่อผู้สมัครงาน : {{firstname}} {{lastname}}</h1> -->
      <!-- <h1>ชื่อผู้สมัครงาน : {{firstname}}</h1>
      <h1>นามสกุลผู้สมัครงาน : {{lastname}}</h1> -->
      <img v-bind:src="picture" :width="size" :height="size" ref="imageEl"/><br/>
      <!-- Enter your nickname : <input type="text" v-on:input="setNickname"/> -->
      <form @submit.prevent="submitForm">
        <label>Enter your nickname :</label>
        <!-- <input type="text" v-on:input="setNickname" ref="nickNameEl"/> -->
        <input type="text" ref="nickNameEl"/>
        <button type="submit">Submit</button>
      </form>
      <h1>Name : {{getFullname}}</h1>
      <h2>Nickname : {{ nickname }}</h2>
      <h1>Age : {{age}}</h1>
      <h1>Salary : {{ salary }} ฿</h1>
      <button @click="increase(1000)">Increase Salary</button>
      <button @click="decrease(1000)">Decrease Salary</button>
      <h1>Income/year : {{ getIncome }} ฿</h1>
      <h1>ตำแหน่งงาน : {{ getDepartment }}</h1>
      <h1>Address : <span v-html="address"></span></h1>
      <p>My Project : <a :href="social" target="_blank">Github</a></p>
      <!-- <h2>Methods1 : {{getRandomByMethod()}}</h2>
      <h2>Methods2 : {{getRandomByMethod()}}</h2>
      <hr/>
      <h2>Computed1 : {{getRandomByComputed}}</h2>
      <h2>Computed2 : {{getRandomByComputed}}</h2> -->
      <button @click="toggleVisible">{{ isVisible ? "Hide" : "Show"}}details</button>
      <article v-show="isVisible">
        <p v-if="hobby.length === 0"> None hobby</p>
        <!-- <div v-else>
          <p>My Hobby : </p>
            <ul>
              <li>{{ hobby[0] }}</li>
              <li>{{ hobby[1] }}</li>
              <li>{{ hobby[2] }}</li>
            </ul>              
        </div>    -->
        <div v-else>
          <p>My Hobby : </p>
            <ul>
              <li v-for="(item,index) in hobby" :key="index"> {{ item }} </li>
            </ul>              
        </div>   
        <p>Personal Details :</p>
          <!-- <ul>
            <li>Gender : {{ general.gender }}</li>
            <li>Weight : {{ general.weight }} kg</li>
            <li>Height : {{ general.height }} cm</li>
            <li>Diseased : {{ general.status }}</li>
          </ul> -->
          <ul>
            <li v-for="(item,key) in general" :key="key"> {{ key }} : {{ item }}</li>
          </ul>
          <button @click="showData">คลิกเพื่อดูข้อมูล</button> 
          <button @click="increment(1)">increment Age</button>
          <button @click="decrement(1)">decrement Age</button> 
      </article>
    </section>
</template>

<script>
export default {
  name: 'App', // ชื่อที่จะถูกส่งไปทำงานด้านนอก
  data () {
    return {
      firstname: "Piinfany",
      lastname: "Studio",
      nickname: "",
      age: 18,
      address: "<i>Thailand</i>", // ถ้าต้องการให้พื้นที่ <> เป็น HTML จะต้องใช้ directive v-html
      picture: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
      size: 150,
      social: "https://github.com/Piinfany",
      hobby: ["play a game", "listen to music", "watch a movie or series", "Work"],
      // hobby: [],
      general: {Gender: "Female", Weight: 44, Height: 157, Diseased: false},
      isVisible: false,
      salary: 15000
    }
  },
  methods:{
    // getFullname() {
    //   return `${this.firstname + " " + this.lastname}` // หากต้องการข้อมูลใน data ต้องใส่ this เพื่อเข้าถึงข้อมูลใน data หรือ `${this.firstname  this.lastname}`
    // },
    showData() {
      alert(`${this.firstname + " " + this.lastname}`)
    },
    increment(value) {
      this.age+=value
    },
    decrement(value) {
      this.age-=value
    },
    // setNickname(event) {
    //   this.nickname = event.target.value
    // },
    submitForm(){
      // console.log(this.$refs.imageEl)
      this.nickname = this.$refs.nickNameEl.value
      alert("Succesfully saved your nickname!!")
    },
    toggleVisible(){
      this.isVisible = !this.isVisible
    },
    // getRandomByMethod() {
    //   return Math.random();
    // }
    increase(value){
      this.salary += value
    },
    decrease(value) {
      this.salary -= value
    }
  },
  computed: {
    getFullname() {
      return `${this.firstname + " " + this.lastname}`;
    },
    // getRandomByComputed() {
    //   return Math.random();
    // }
    getIncome(){
      return this.salary * 12;
    },
    getDepartment() {
      return this.salary >= 35000 ? "Project manager" : "Developer";
    }   
  },
  watch: {
    salary(value){
      if(value > 40000) {
        alert("เงินเดือนไม่ควรเกิน 40,000 บาท")
        setTimeout(() => {
          this.salary = 40000
        }, 100)
      }
    }
  }
}
</script>

<style> 
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
