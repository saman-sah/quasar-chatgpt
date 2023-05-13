<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex';

export default defineComponent({
  data() {
    return {
      
    }
  },
  mounted() {
    // this.getMessageAction();
    // this.getImageAction();
  },
  methods: {
    ...mapActions('gpt',{
      getMessageAction: 'getMessageAction',
      getImageAction: 'getImageAction',
    }),
  }
})
</script>
