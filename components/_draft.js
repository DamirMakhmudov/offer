app.component('first', {
  name: 'first',
  emits:['fill-filter'],
  template:
  /*html*/
  `
  <span>{{head + ' ' + act(head)}}</span>
  <hr>
  <span>{{firstname}}</span>
  `
  ,
  props:
  // ['head', 'act']
  {
    head:{
      type: String,
      required: false
    },
    act:{
      type: Function,
      required: false
    }
  }
  ,
  setup(){
    const firstname = this.title
    return{
      firstname
    }
  },
  mounted:
    function(){
      // console.log('first component is mounted');
      // console.log(mountedapp.title)
      // firstname = mountedapp.title
    }
  
  // data(){
  //   return {
  //    firstname: app.title
  //   }
  // }
})