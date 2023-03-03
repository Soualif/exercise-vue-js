var users = [{
    firstName :"Paul",
    lastName  :"Duboit",
    age       : 35,
},
{
    firstName :"Michel",
    lastName  :"Dubon",
    age       : 55
}
];


const application = {
    data (){ 
        return {
           users  : window.users,
           newUser: {

           },
           errors : [],

     } 
 },
    methods: {
        addUser: function() {
            this.errors = [];

            if(!this.newUser.firstName) {
                this.errors.push('FirstName requis.');
            }

            if(!this.newUser.lastName) {
                this.errors.push('LastName requis.');
            }

            if(!this.newUser.age || !Number.isInteger(this.newUser.age) || this.newUser.age < 15) {
                this.errors.push('Vous devez avoir au moins 15 ans.');
            }

            if(this.errors.length) {
                return false;
            }

            this.users.push(this.newUser);
            this.newUser = {};
            this.errors = [];

        }
    }
}

Vue.createApp(application).mount('#app');
