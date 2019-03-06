Firstly, install this skin:

```
yarn add former-kit-skin-pagarme
```

And some dependencies:

```
yarn add @svgr/webpack@4.1.0
yarn add css-loader@2.1.0
yarn add file-loader@3.0.1
yarn add postcss-cssnext@3.1.0
yarn add postcss-hexrgba@1.0.1
yarn add postcss-import@12.0.1
yarn add postcss-loader@3.0.0
yarn add postcss-sass-each@0.1.0
yarn add postcss-url@8.0.0
yarn add react-dev-utils@7.0.3
yarn add style-loader@0.23.1
yarn add stylelint-config-pagarme-react@1.2.0
yarn add stylelint-webpack-plugin@0.10.5
yarn add stylelint@9.10.0
```

Then create a new file at `/config/former-kit/webpack.config.js` with:

```js
import stylelintFormatter from './stylelintFormatter'
import postcssUrlRebase from './postcssUrlRebase'

const postCSSPlugins = [
  require('postcss-sass-each'),
  require('postcss-hexrgba'),
  require('postcss-import'),
  require('postcss-url')({
    url: postcssUrlRebase,
  }),
]

const postcssNextWhitoutCustomProps = require('postcss-cssnext')({
  features: {
    customProperties: false,
  },
})

module.exports = [
  {
    test: /\.css$/,
    exclude: /react-dates/,
    enforce: 'pre',
    use: [
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // ident: 'postcss',
          formatter: stylelintFormatter,
          plugins: () => [
            require('stylelint'),
            ...postCSSPlugins,
            require('postcss-cssnext')({
              features: {
                customProperties: {
                  strict: false,
                },
              },
            }),
          ],
        },
      },
    ],
  },
  {
    test: /.*\.css$/,
    exclude: /react-dates/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[path]-[name]-[local]',
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          importLoaders: 1,
          sourceMap: 'inline',
          plugins: () => [
            ...postCSSPlugins,
            postcssNextWhitoutCustomProps,
          ],
        },
      },
    ],
  },
  {
    // This block matches only react-dates styles and extract them
    // separately, in a pipeline without CSS modules, as react-dates
    // uses global CSS. This is the place where all global CSS libraries
    // should be matched. Be sure to also edit the exclude regex from
    // previous test.
    test: /.*react-dates.*\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            ...postCSSPlugins,
            postcssNextWhitoutCustomProps,
          ],
        },
      },
    ],
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
      {
        loader: require.resolve('@svgr/webpack'),
        options: {
          replaceAttrValues: {
            '#000': 'currentColor',
            '#000000;': 'currentColor',
          },
          svgoConfig: {
            plugins: {
              removeViewBox: false,
            },
          },
          titleProp: true,
        },
      },
    ],
  },
  {
    test: /\.(woff|woff2|eot|ttf)$/,
    loader: require.resolve('file-loader'),
    options: {
      name: 'static/media/[name].[hash:8].[ext]',
    },
  },
]
```

In the same folder, copy these files:

* [postcssUrlRebase.js](https://github.com/pagarme/former-kit/blob/master/config/postcssUrlRebase.js)
* [stylelintFormatter.js](https://github.com/pagarme/former-kit/blob/master/config/stylelintFormatter.js)

In your `webpack.config.js` file, add the rules from `/config/former-kit/webpack.config`, for example:

```js
import formerKitRules from './former-kit/webpack.config'

const rules = [
  { /* your rules */ },
].concat(formerKitRules)

module.exports = {
  module: {
    rules,
  },
}
```

Finally, configure `ThemeProvider` accordingly:

```jsx
import { ThemeProvider } from 'former-kit'
import pagarmeSkin from 'former-kit-skin-pagarme'

const App = () => (
  <ThemeProvider theme={pagarmeSkin}>
    ...
  </ThemeProvider>
)
```
