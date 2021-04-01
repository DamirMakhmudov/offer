app.component('square', {
  name: 'square',
  emits:['backsquare'],
  template:
  /*html*/
  `
  <template v-if='preview'>
    <p>filterSquare: {{squarec}}</p>
    <input v-model='squarec.val'>
  </template>

  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-option-group
        v-model="squarec.val"
        :options="optionsc"
        color="primary"
        inline
        dark
      />
    </div>
  </div>
  `
  ,
  props:{
    square: {
      type: Object
    },
    options: {
      type: Array
    }
  },
  setup(props) {
    return {
      preview: preview,
      squarec: ref(props.square),
      optionsc: ref(props.options),
    }  
  },
  mounted: function(){
    // @update:modelValue="val => { $emit('backsquare', squarec) }"
    // console.log(`${this.$options.name} component is mounted`);
  }
})