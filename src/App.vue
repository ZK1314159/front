<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
      <br/>
      <br/>
      <el-button @click="handleClick">send get request to background</el-button>
      <br/>
      <br/>
      <el-button @click="handleClickForPost">send post request to background</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from '../node_modules/axios/dist/axios.js';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    handleClick() {
      let uidArray = new Array();
      uidArray[0] = 123;
      uidArray[1] = 1234;
      let uidList = uidArray.join(",");
      axios.get('/test/get', {
          params: {
              userId: 20,
              uidList: uidList,
              price: 36.5,
              judge: false
          }
      })
      .then(resp => {
          console.log(resp.data);
          let testByte = resp.data.testByte;
          console.log("testByte:" + testByte);
          let testShort = resp.data.testShort;
          console.log("testShort:" + testShort);
          let testLong = resp.data.testLong;
          console.log("testLong:" + testLong);
          let testFloat = resp.data.testFloat;
          console.log("testFloat:" + testFloat);
          let testBoolean = resp.data.testBoolean;
          console.log("testBoolean:" + testBoolean);
          let character = resp.data.character;
          console.log("character:" + character);
      }).catch(err => {
          console.log('请求失败：' + err.status + ',' + err.statusText);
      });
    },
    handleClickForPost() {
      let uidArray = new Array();
      uidArray[0] = 123;
      uidArray[1] = 1234;
      let uidList = uidArray.join(",");
      axios.post('/test/post', {
          userId: 20,
          uidList: uidList,
          price: 36.5,
          judge: false
      })
      .then(resp => {
          console.log(resp.data);
      }).catch(err => {
          console.log('请求失败：' + err.status + ',' + err.statusText);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
