var fruits =  [
  'orange','pomme','banane','citron',
]

const application = {
    data(){
      return {
        fruits: fruits,
      }
    }
}
Vue.createApp(application).mount('#app');