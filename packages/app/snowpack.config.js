module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'tsc --noEmit',
        watch: '$1 --watch',
      },
    ],
  ],
  alias: {
    '@learn-snowpack/core': '../core/src/',
  },
  devOptions: {
    port: 3000,
  },
  buildOptions: {
    sourceMaps: true,
  },
};
