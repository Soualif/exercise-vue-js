
const application = {
    data(){
      return {
        textHtml: '<p class="text-danger">Attention !</p>'
      }
    }
}
Vue.createApp(application).mount('#app');