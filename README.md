<img src="https://avatars1.githubusercontent.com/u/3846050?v=4&s=200" width="127px" height="127px" align="left"/>

# Pagar.me Skin for FormerKit

Our style guide as a FormerKit skin

<br>

[![Join the chat at https://gitter.im/pagarme/opensource](https://badges.gitter.im/pagarme/opensource.svg)](https://gitter.im/pagarme/opensource?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<br>

## Using

This skin is based on our component style guide and built to work with
[FormerKit Dashboard][react-scripts] setup. To use it, you need to set some
configurations on Webpack and install some packages.

[You can follow it here](./doc/how-to-install.md).

## Development

To build a npm-ready package:

```
yarn build
```

In real life you will probably want to see changes made in this skin
package in an already existing application.

To register the skin as a "linkable" package, run the following command
in the skin directory:

```
yarn link
```

Then, in an existing application link the registered package:

```
yarn link former-kit-skin-pagarme
```

To keep watching for changes:

```
yarn start
```

## Licensing

See [LICENSE](LICENSE.md).

[cssnext]: http://cssnext.io
[react-scripts]: https://github.com/pagarme/react-scripts-former-kit-dashboard
