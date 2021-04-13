<template>
  <div class="hello">
    <div id="container">
      <img alt="user" src="../assets/user.svg">
      <br>
      <span>Olá, Gabriel!</span>
      <br>
      <ul>
        <li v-for="(task, index) in tasks"
          @click="removeTask(index)"
          @complete="completeTask(task)"
          :task="task"
          :key="task">
            {{task}}
        <input type="checkbox" >

        </li>
      </ul>
  


      <br>
      <button @click="add">+</button>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    msg: String
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    add() {
      this.tasks.push("aaa");
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
}

#container {
  width: 40vw;
  height: 80vh;
  
  border: 1px solid #333333;
  border-radius: 2rem;
  
  background-color: white;

  z-index: 99;
}

img {
  margin-top: 1rem;
  width: 4rem;
  height: 4rem;
}

span {
  font-weight: bold;
}

p {
  float: left;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  width: 70%;
  height: 2rem;
  margin: 1rem auto;
  
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: auto;
  background-color: #fff;
  box-shadow: 0px 0.25rem 1rem rgba(0,0,0,0.25);
}

li:hover {
  text-decoration: line-through;
  cursor: pointer;
}

button {  
  background-color: #409EFF;
  color: white;
  font-size: 20px;
  border: none;

  position: relative;

  width: 6rem;
  height: 2rem;
  border-radius: 2rem;

  transition: all 0.2s ease;

  border: none;
  outline:none;
}

button:hover {
  cursor: pointer;
  width: 6.4rem;
  box-shadow: 0 0 10px rgba(33,33,33,.4); 
}
</style>
