module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'PBM Viewer',
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pbm-viewer/'
    : '/',
};