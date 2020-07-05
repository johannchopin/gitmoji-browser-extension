# 🦄 Contributing to gitmoji-browser-extension

Hello! 👋

Thanks for contributing on [gitmoji-browser-extension](https://github.com/johannchopin/gitmoji-browser-extension). Before implementing new features and changes, feel free to [submit an issue](https://github.com/johannchopin/gitmoji-browser-extension/issues/new/choose). We're going to talk here :stuck_out_tongue_winking_eye:.

This project uses [Svelte](https://svelte.dev/) to create the interface and is build using [Parceljs](https://parceljs.org/).

## 🌱 How to submit a pull request?

1. Fork this repository.
2. Create a new feature branch starting from `develop` (⚠️ not `master`). (Eg: `feature/improve-footer-design`)
3. Make your changes.
4. Make a little check using `yarn lint`
5. Commit your changes using the [gitmoji](https://gitmoji.carloscuesta.me/) convention.
6. Submit your pull request.

## 🔨 How to start gitmoji-browser-extension locally

If you want to make changes to the site, follow the next steps:

1. Clone the project

```sh
git clone https://github.com/johannchopin/gitmoji-browser-extension.git
cd gitmoji-browser-extension
```

2. Install the dependencies and start the development task.

```sh
yarn install && yarn start
```

The development task will compile, watch and open the extension in a sandbox webpage. Your are ready to make your changes 👍

3. Build the extension to test it in your browser

```sh
yarn watch
```

It will compile and watch the extension under the `dist/` folder. Just load this folder has an unpacked extension in your browser:

- in Firefox : [Temporary installation in Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- in Chrome : See point **1** of [Create the manifest step](https://developer.chrome.com/extensions/getstarted#manifest)

---

<p align="center">
  Made with ❤ by <a href="https://github.com/johannchopin">@johannchopin</a> and <a href="https://github.com/Lyokolux">@lyokolux</a>
</p>
