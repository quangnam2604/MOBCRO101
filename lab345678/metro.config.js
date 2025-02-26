/**
 * Metro configuration for React Native
 * https://facebook.github.io/metro/docs/configuration
 *
 * @format
 */

module.exports = {
    resolver: {
      sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Thêm phần mở rộng nếu cần
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
  };
  