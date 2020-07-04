# 😜 Gitmoji Browser Extension

The [Gitmoji](https://gitmoji.carloscuesta.me/) extension to easily search and copy gitmojis 😜

<a href="https://gitmoji.carloscuesta.me">
  <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
</a>
<a href="https://travis-ci.org/johannchopin/gitmoji-browser-extension">
  <img src="https://travis-ci.org/johannchopin/gitmoji-browser-extension.svg?branch=master" alt="Build Status">
</a>
<a href="https://addons.mozilla.org/fr/firefox/addon/gitmoji-browser-extension/?src=search">
  <img alt="Mozilla Add-on" src="https://img.shields.io/amo/v/{9e4aa2fd-a458-494a-a674-06541e2229ee}">
</a>
<a href="https://chrome.google.com/webstore/detail/gitmoji-browser-extension/lkjogeoldakjceempbkdahkojohmbaja">
  <img src="https://img.shields.io/chrome-web-store/v/lkjogeoldakjceempbkdahkojohmbaja" alt="Chrome Web Store">
</a>

<p align="center">
  <img src="https://user-images.githubusercontent.com/31794680/86494230-af1d2400-bd74-11ea-9c08-29238c853127.gif" alt="Screenshot - overview" width="320" />
</p>

## 🎉 Installation

Install the extension according to your browser:
- [Chrome web store](https://chrome.google.com/webstore/detail/gitmoji-browser-extension/lkjogeoldakjceempbkdahkojohmbaja)
- [Firefox add-ons](https://addons.mozilla.org/fr/firefox/addon/gitmoji-browser-extension)

## ✨ Usage (keyboard)

- toggle the extension button or use the shortcut <kbd>Alt+G</kbd> (<kbd>Opt+G</kbd> for mac)
- search emoji names or descriptions (from the [website](https://gitmoji.carloscuesta.me/))
- use <kbd>tab</kbd> and <kbd>Shift+tab</kbd> to navigate between the shortcodes and emojis
- press <kbd>Enter</kbd> to copy

## 🔨 Run the extension

```sh
yarn install

yarn start # open extension in the sandbox
yarn watch # build into dist/ and watch
```

Load extension in the browser

- in Firefox : [Temporary installation in Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- in Chrome : [Create the manifest step](https://developer.chrome.com/extensions/getstarted#manifest)

### 🚀 Build the extension

```sh
yarn build
```

It will build the extension with all the needed assets and create the `extension.zip` file at the root of the project.

## 🦄 Contributing

All remarks are welcome. [Open an issue](https://github.com/johannchopin/gitmoji-browser-extension/issues/new/choose) 😉

## 📄 License

The code is available under [the MIT license](./LICENCE).

---

<p align="center">
  Made with ❤ by <a href="https://github.com/johannchopin">@johannchopin</a> and <a href="https://github.com/Lyokolux">@lyokolux</a>
</p>
