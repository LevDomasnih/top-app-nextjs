// eslint-disable-next-line no-undef,@typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
}