# 😜 Gitmoji Browser Extension

The [Gitmoji](https://gitmoji.dev/) extension to easily search and copy gitmojis 😜

![test workflow](https://github.com/johannchopin/gitmoji-browser-extension/actions/workflows/test.yml/badge.svg)
<a href="https://gitmoji.carloscuesta.me">
  <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
</a>
<a href="https://semver.org/">
  <img src="https://img.shields.io/badge/Versioning-SemVer-blue" alt="This projet uses SemVer for versioning"/>
</a>

<p align="center">
<table align="center">
  <tr>
    <th>
      <img alt="Mozilla icon" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" width="30">
    </th>
    <th>
      <img alt="Chrome icon" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg" width="30">
    </th>
    <th>
      <img alt="Edge icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1024px-Microsoft_Edge_logo_%282019%29.svg.png" width="30">
    </th>
  </tr>
  <tr>
    <td>
      <a href="https://addons.mozilla.org/en-US/firefox/addon/gitmoji-browser-extension/" target="_blank">
        <img alt="Mozilla Add-on" src="https://img.shields.io/amo/v/{9e4aa2fd-a458-494a-a674-06541e2229ee}">
      </a>
    </td>
    <td>
      <a href="https://chrome.google.com/webstore/detail/gitmoji-browser-extension/lkjogeoldakjceempbkdahkojohmbaja" target="_blank">
        <img alt="Chrome Web Store" src="https://img.shields.io/chrome-web-store/v/lkjogeoldakjceempbkdahkojohmbaja">
      </a>
    </td>
    <td>
      <a href="https://microsoftedge.microsoft.com/addons/detail/gitmoji-browser-extension/lbmcfpombfmfhgheofkfhmhnmcbomjdd" target="_blank">
        <img alt="Edge Add-on" src="https://img.shields.io/badge/dynamic/json?label=edge%20add-on&prefix=v&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Flbmcfpombfmfhgheofkfhmhnmcbomjdd">
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <img alt="Mozilla Add-on" src="https://img.shields.io/amo/users/%7B9e4aa2fd-a458-494a-a674-06541e2229ee%7D">
    </td>
    <td>
      <img alt="Chrome Web Store" src="https://img.shields.io/chrome-web-store/users/lkjogeoldakjceempbkdahkojohmbaja">
    </td>
    <td>
      <img alt="Edge Web Store" src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/johannchopin/gitmoji-browser-extension/master/docs/edge_addon_analytics_for_shield.json">
    </td>
  </tr>
</table>
</p>


<p align="center">
  <img src="https://user-images.githubusercontent.com/31794680/86494230-af1d2400-bd74-11ea-9c08-29238c853127.gif" alt="Screenshot - overview" width="320" />
</p>

## 🎉 Installation

Install the extension according to your browser:
- [Chrome web store](https://chrome.google.com/webstore/detail/gitmoji-browser-extension/lkjogeoldakjceempbkdahkojohmbaja)
- [Firefox add-ons](https://addons.mozilla.org/en-US/firefox/addon/gitmoji-browser-extension/)
- [Edge add-ons](https://microsoftedge.microsoft.com/addons/detail/gitmoji-browser-extension/lbmcfpombfmfhgheofkfhmhnmcbomjdd)


## 🧩 Features

- 🔍 Search for a specific gitmoji's code/emoji by name or description
- ➕ Inject 🔀 gitmoji in front of the commit title of GitHub/GitLab pull-request (⚙️)
- 🌔 Dark/light mode (⚙️)
- ❌ Close extension's popup after a gitmoji is saved in the clipboard (⚙️)
- ❓ Show gitmoji's description on mouse over or focus (⚙️)

Features with the (⚙️) can be modified in the settings page.

## ⚖️ Permissions

>activeTab

Detect the gitmojis present on the current tab.
Used to access some hardcoded URLs detailed below:

>Access your data for github.com  
>Access your data for gitlab.com

Both are used for the feature "Inject 🔀 gitmoji in front of the commit title of GitHub/GitLab pull-request"

We restricted these permissions to the [minimum by using specific URLs](https://github.com/johannchopin/gitmoji-browser-extension/blob/master/manifest.json#L29):
* https://github.com/*/*/pull/*
* https://gitlab.com/*/*/-/merge_requests/*

It can be checked on the [injectMergeGitmoji.js](https://github.com/johannchopin/gitmoji-browser-extension/blob/master/src/injectMergeGitmoji.js) file.

>Storage

The storage is used to keep the settings preferences (see 🧩 Features > Through the settings panel).

## ✨ Usage (with keyboard shortcuts)

- toggle the extension button or use the shortcut <kbd>Alt+G</kbd> (<kbd>⌥+G</kbd> for mac)
- search emoji names or descriptions (from the [website](https://gitmoji.dev/))
- use <kbd>tab</kbd> and <kbd>Shift+tab</kbd> to navigate between the shortcodes and emojis
- press <kbd>Enter</kbd> to copy

## 🦄 Contributing

All remarks are welcome so feel free to [open an issue](https://github.com/johannchopin/gitmoji-browser-extension/issues/new/choose) 😉
Wants to collaborate? Please read the [contributing guidelines](./CONTRIBUTING.md).

## 📄 License

The code is available under [the MIT license](./LICENCE).

---

<p align="center">
  Made with ❤ by <a href="https://github.com/johannchopin">@johannchopin</a> and <a href="https://github.com/Lyokolux">@lyokolux</a>
</p>
