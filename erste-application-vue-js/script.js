const application = {
  data(){
    return {
        title: 'Hello Word',
        message: 'Voici ma première application Vue.js',
        width  : 500,
        height: 200,
    }
  },

  methods: {
    bonjour: function(){
        return 'Bonjour tout le monde'
    },
    calaculSquareSurface: function(side){
        return side * side;
    },
    calculRectangleSurface: function(){
        return this.width * this.height;
    }
  }
}
Vue.createApp(application).mount('#app');