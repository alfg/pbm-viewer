<template>
  <div class="viewer">
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      @change="onFile"
    ></b-form-file>
    <div class="mt-3" v-if="file">Selected file: {{ file ? file.name : '' }}</div>

    <img v-if="image" :src="image" />
  </div>
</template>

<script>
import Image from '../image';

export default {
  name: 'Viewer',
  data() {
    return {
      file: null,
      image: null,
    }
  },
  methods: {
    onFile(event) {
      const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        const img = new Image(data);
        this.image = img.getPNG();
      }
      reader.readAsBinaryString(file);
    },
  }
}
</script>

<style scoped>
</style>
