
const application = {
    data(){
      return {
        km: 0,
        finish: 5,
      }
    },
      methods: {
        drive: function (){
          setInterval(() => {
            this.km++;  
          }, 1000);
        }
      },

      watch: {
        km: function(){
        if(this.km == this.finish ){
          alert('Tu es arrivé!');
        }
      }
      },
      beforeCreate() {
        console.log(this.km);
      },
      created(){
        this.drive();
      }
    }

Vue.createApp(application).mount('#app');