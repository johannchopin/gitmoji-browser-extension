const INJECT_GITMOJI_SETTINGS_KEY = 'inject-gitmoji'
const DEFAULT_INJECT_GITMOJI_SETTINGS = { inject: true, type: 'emoji' }
const MERGE_GITMOJI = {
  emoji: '🔀',
  code: ':twisted_rightwards_arrows:'
}

export const getPlatform = () => {
  const currentUrl = window.location.href
  const PLATFORMS = [
    {
      url: 'https://github.com/',
      platform: 'github'
    },
    {
      url: 'https://gitlab.com/',
      platform: 'gitlab'
    }
  ]

  const match = PLATFORMS.find((platform) => {
    return currentUrl.startsWith(platform.url)
  })

  if (match) {
    return match.platform
  }

  return null
}

const getCommitTitleInput = (platform) => {
  if (platform === 'github') return document.querySelector('input[name="commit_title"]')
  if (platform === 'gitlab') return document.getElementById('merge-message-edit')
}

export const injectMergeGitmoji = (gitmojiType) => {
  const platform = getPlatform()

  if (platform) {
    let commitTitleInput = getCommitTitleInput(platform)

    if (commitTitleInput) {
      const title = commitTitleInput.value.trim()

      const gitmojiAlreadySet = [MERGE_GITMOJI.code, MERGE_GITMOJI.emoji].some((gitmoji) => {
        return title.startsWith(gitmoji)
      })

      if (!gitmojiAlreadySet) {
        const gitmoji = MERGE_GITMOJI[gitmojiType]
        const titleWithGitmoji = `${gitmoji} ${title}`

        commitTitleInput.value = titleWithGitmoji
      }
    }
  }
}

// eslint-disable-next-line no-undef
chrome.storage.local.get([INJECT_GITMOJI_SETTINGS_KEY], (result) => {
  const injectGitmojiSetting = result[INJECT_GITMOJI_SETTINGS_KEY]
    || DEFAULT_INJECT_GITMOJI_SETTINGS
  const { inject, type } = injectGitmojiSetting

  if (inject) {
    const observer = new MutationObserver(() => { injectMergeGitmoji(type) })
    observer.observe(document.body, { attributes: true, childList: true })
  }
})
