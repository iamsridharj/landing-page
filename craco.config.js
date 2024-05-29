const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@botbrews/components': path.resolve(
        __dirname,
        'src/design-system/components',
      ),
      '@botbrews/typography': path.resolve(
        __dirname,
        'src/design-system/foundation/typography',
      ),
      '@botbrews/breakpoints': path.resolve(
        __dirname,
        'src/design-system/foundation/breakpoints',
      ),
      '@botbrews/assets': path.resolve(
        __dirname,
        'src/design-system/assets',
      ),
      '@botbrews/components/types': path.resolve(
        __dirname,
        'src/design-system/components/types.d.ts',
      ),
    },
    configure: (webpackConfig) => {
      // First, find the existing rule for SVGs (handled by file-loader in CRA) and exclude SVGs
      const fileLoaderRule = webpackConfig.module.rules.find(
        (rule) => rule.test && rule.test.test('.svg'),
      )
      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/
      }

      // Then, add the new rule for handling SVGs with @svgr/webpack
      webpackConfig.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      })

      return webpackConfig
    },
  },
}
