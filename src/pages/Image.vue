<template>
    <div class="q-pa-md">
    <div class="q-col-gutter-md col items-start">
      <h5>{{ userPromptImage }}</h5>
      <div class="col-6">
        <q-img :src="assistantImgUrl" width="300px">
          <!-- <div class="absolute-bottom text-subtitle1 text-center">
            {{ userPromptImage }}
          </div> -->
        </q-img>
      </div>
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
            'assistantMsg',
            'userPromptImage',
            'assistantImgUrl'
        ])
    }
}
</script>

<style>

</style>