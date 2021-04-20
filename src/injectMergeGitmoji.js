const MERGE_EMOJI = '🔀'
const MERGE_CODE = ':twisted_rightwards_arrows:'

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

export const injectMergeGitmoji = () => {
  const platform = getPlatform()

  if (platform) {
    let commitTitleInput = getCommitTitleInput(platform)

    if (commitTitleInput) {
      const title = commitTitleInput.value

      const gitmojiAlreadySet = [MERGE_CODE, MERGE_EMOJI].some((gitmoji) => {
        return title.startsWith(gitmoji)
      })

      if (!gitmojiAlreadySet) {
        const titleWithGitmoji = `🔀 ${title}`
        commitTitleInput.value = titleWithGitmoji
      }
    }
  }
}

const observer = new MutationObserver(injectMergeGitmoji)
observer.observe(document.body, { attributes: true, childList: true })
