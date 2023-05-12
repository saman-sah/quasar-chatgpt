<template>
   <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="[userMsg]"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
      v-if="assistantMsg"
        name="Chat gpt"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[assistantMsg]"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            msg: 'helloooooooooo'
        }
    },
    computed: {
        ...mapState('gpt', [
            'userMsg',
            'assistantMsg'
        ])
    }
}
</script>

<style>

</style>