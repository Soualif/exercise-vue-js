
const application = {
    data(){ 
      return {
        message:'message par defaut'
      }  
    }
}
Vue.createApp(application).mount('#app');