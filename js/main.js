// VUE
const app = new Vue ({
  el: '#app',
  data: {
    todoList: [
      'Fare la spesa',
      'Fare l\'esercizio',
      'Fare il bucato',
    ],
    message: '',
  },
  methods: {
    submit() {
      this.todoList.push(this.message);
      this.message = '';
    },
    remove(index) {
      this.todoList.splice(index , 1);
    },
  },
});
