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
    this.getMessageAction();
  },
  methods: {
    ...mapActions('gpt',{
      getMessageAction: 'getMessageAction'
    }),
    async getMessage() {
      const response= await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.API_KEY}`,
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          model: "gpt-3.5-turbo",
          messages:[
            {
              role: 'user',
              content: "Hello"
            }
          ]
        })
      })
      const data= await response.json();
      console.log('data');
      console.log(data);
    }
  }
})
</script>
