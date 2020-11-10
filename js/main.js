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
    endList: true,
  },
  created() {
    setInterval( this.controlList() , 1000 );
  },
  methods: {
    submit() {
      this.todoList.push(this.message);
      this.message = '';
    },
    remove(index) {
      this.todoList.splice(index , 1);
      // this.controlList();
    },
    controlList() {
      if (this.todoList.length === 0) {
        this.endList = false;
      }
      this.endList = true;
    },
  },
});
