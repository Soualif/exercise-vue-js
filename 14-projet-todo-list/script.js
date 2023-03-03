// var tasks = [
    // {
        // name: 'faire les courses',
        // done: false,
    // },
    // {
        // name: 'Coder mon projet',
        // done: true,
    // }
// ]

const todoList = {
    data() {
        return {
            tasks: [],
            newTask: {
                done: false,
            },
            errors: [],
        }
    },

    methods: {
        addTask: function(){
            this.errors = [];
            
            if(!this.newTask.name){
                this.errors.push('Veuillez ajouter une tache!');
                return false;
            }

             this.tasks.push(this.newTask);
             this.newTask = {};
             this.errors = [];
             this.$refs.name.focus();

            //  localStorage.setItem('tasks', JSON.stringify(this.tasks));

        },

        removeAll: function(){
            if(! confirm('Confirmez la suppression?')){
                return false;
            }
            this.tasks = [];
        }
         
    },
    
    created(){
        this.tasks = localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks'))
        : this.tasks;
    },

    updated(){
        localStorage.setItem('tasks', JSON.stringify(this.
            tasks));
    },
    
}

Vue.createApp(todoList).mount('#app');