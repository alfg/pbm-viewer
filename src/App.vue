<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <div class="container">
        <b-navbar-nav>
          <b-nav-item href="#">
            PBM Viewer
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>

    <div id="app" class="container">
      <h3>PPM, PGM, and PBM Viewer</h3>
      <hr />
      <Viewer />
    </div>

    <footer class="container mt-4 text-center">
      <hr />
      <div class="text-muted">
        <ul>
          <li>{{ name }}-{{ version }}</li>
          <li><a href="https://github.com/alfg/pbm-viewer">Source</a></li>
          <li><a href="https://github.com/alfg/pbm-viewer/issues">Report Bugs</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import { name, version } from '../package.json';
import Viewer from './components/Viewer.vue';

export default {
  name: 'App',
  components: {
    Viewer
  },
  data() {
    return {
      name,
      version,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}

footer ul {
  display: inline-block;
  padding-left: 0;
  text-align: left;
  width: 100%;
}

footer ul li {
  display: inline;
  margin: 0 6px;
  list-style: none;
}
</style>
