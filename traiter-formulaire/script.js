var users = [{
        firstName: 'Jean',
        lastName: 'Dupont',
        age: '22',
    },
    {
        firstName: 'Paul',
        lastName: 'Dubois',
        age: '35',
    }
];

   const application = {
    data() {
        return {
            users: window.users,
            newUser: {

            },
            errors: [],
        }
    },
    methods:{
      addUser:function(){
        this.error = [];

         if(!this.newUser.firstName){
            this.errors.push('FirstName requis.');
         }
         if(!this.newUser.lastName){
            this.errors.push('lastName requis.');
         }
         if(!this.newUser.age || !Number.isInteger(this.newUser.age) || this.newUser.age < 15){
            this.errors.push('Vous devet avoir au moins 15 ans!');
         }
         

         if(this.errors.length){
            return false;
         }

         this.users.push(this.newUser);
         this.newUser = {};
         this.errors  = [];

      }
    }
}


Vue.createApp(application).mount('#app');