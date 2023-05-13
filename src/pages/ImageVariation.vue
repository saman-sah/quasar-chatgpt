<template>
    <div class="q-pa-md">
    <div class="q-col-gutter-md col items-start">
       <q-file outlined  @input="onFileChange" ref="file_selected">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
        <q-btn round dense flat icon="send" />
      </q-file>
      <q-img v-if="url" :src="url" width="100px"></q-img>
      <div class="col-6">

        <q-img v-for="(url, index) in urlsVariation"
        :key="index"
        :src="url" width="300px">
        </q-img>
      </div>
    </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            file: '',
            url: null
        }
    },
    mounted() {
      // this.getImageVariation();
    },
    computed: {
        ...mapState('gpt', [
          'userImageurl',
          'urlsVariation',
          'userMsg'
        ])
    },
    methods: {
      ...mapActions('gpt', {
        getImageVariation: 'getImageVariation',
      }),
      ...mapMutations('gpt', {
        setImageSelected: 'SET_IMAGE_SELECTED'
      }),
      getFile(e) {
        console.log(this.$refs.file_selected);
      },
      onFileChange(e) {
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file);
        let url = this.url.slice(5)
        console.log('this.url');
        console.log(this.url);
        this.setImageSelected(url)
        this.getImageVariation();
      }
    },
}
</script>

<style>

</style>