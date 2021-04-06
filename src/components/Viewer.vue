<template>
  <div class="viewer">
    <b-form-row>
      <b-col>
        <b-form-group label="Select a file:" label-for="file">
          <b-input-group>
            <b-form-select class="protocol" v-model="protocol">
              <option v-for="o in protocols" :key="o.id" :value="o.value">{{ o.name }}</option>
            </b-form-select>

            <b-form-file
                v-if="protocol === 'file'"
                id="file"
                accept=".pbm, .pgm, .ppm"
                v-model="file"
                :state="Boolean(file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                @change="onFile"
            ></b-form-file>

            <b-form-input
              v-if="protocol === 'url'"
              v-model="url"
              :state="Boolean(url)"
              placeholder="Enter a URL"
            ></b-form-input>

            <b-form-select v-if="protocol === 'example'" v-model="url">
              <template #first>
                <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
              </template>
              <option v-for="o in examples" :key="o.id" :value="o.value">{{ o.name }}</option>
            </b-form-select>

            <b-input-group-append v-if="protocol !== 'file'">
              <b-button @click="onDownload">Download</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-form-row>

    <b-progress
      height="2px"
      v-if="showProgress"
      :value="progress"
      max="100">
    </b-progress>

    <img v-if="image" :src="image" width="100%" />
  </div>
</template>

<script>
import Image from '../image';

export default {
  name: 'Viewer',
  data() {
    return {
      protocols: [
        { name: 'File', value: 'file'},
        { name: 'URL', value: 'url'},
        { name: 'Example', value: 'example'},
      ],
      examples: [
        { name: 'bbb-frame-1.ppm', value: 'https://video-examples-public.s3.us-west-2.amazonaws.com/bbb-frame-1.ppm'},
      ],
      protocol: 'file',
      file: null,
      url: null,
      image: null,
      progress: 0,
      showProgress: false,
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
    onDownload() {
      this.data = null;
      this.progress = 0;
      this.showProgress = true;

      const reader = new FileReader();

      reader.onload = (event) => {
        this.progress = 100;
        const data = event.target.result;
        const img = new Image(data);
        this.image = img.getPNG();
        setTimeout(() => { this.showProgress = false; }, 2000);
      }
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          this.progress = parseInt(((event.loaded / event.total) * 100), 10);
        }
      }
      const xhr = new XMLHttpRequest();
      xhr.onprogress = (event) => {
        if (event.lengthComputable) {
          this.progress = parseInt(((event.loaded / event.total) * 100), 10);
        }
      }
      xhr.onload = (event) => {
        this.progress = 100;
        reader.readAsBinaryString(event.target.response);
      }
      xhr.open('GET', this.url, true);
      xhr.responseType = 'blob';
      xhr.send();
    },
  }
}
</script>

<style scoped>
.protocol {
  flex: 0 0 20% !important;
}
</style>
