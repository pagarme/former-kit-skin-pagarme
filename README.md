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

## Publishing to NPM

The publishing process is automated using a combination of GitHub Actions and CircleCI. We're using the [release-please-action](https://github.com/GoogleCloudPlatform/release-please-action) in order to automatically create GitHub releases and bump the package.json version based on commit messages conventions known as [Conventional Commits](https://www.conventionalcommits.org/). And on Circle CI we have the NPM publishing workflow.

By following those commit conventions the release-please-action will automatically identify when you're merging a pull request which is in accordance and immediately after will create another pull request which will contain the changelog, the package.json version bump, a tag, and a release indicating the new version.

You're not required to merge this release pull request, but when you do it will trigger a workflow on CircleCI which will publish the new version of the package to NPM.

if you can't get it through CI you need to have access to NPM publish and run
```
npm publish
```

## Licensing

See [LICENSE](LICENSE.md).

[cssnext]: http://cssnext.io
[react-scripts]: https://github.com/pagarme/react-scripts-former-kit-dashboard

