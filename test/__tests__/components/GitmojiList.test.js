import { render } from '@testing-library/svelte'
import { gitmojis } from 'gitmojis'
import GitmojiList from '../../../src/components/GitmojiList.svelte'

describe('<GitmojiList />', () => {
  let wrapper
  let gitmojiListProps = {
    gitmojis
  }

  beforeEach(() => {
    wrapper = render(GitmojiList, gitmojiListProps)
  })

  it('should match snapshot', () => {
    const { container } = render(GitmojiList, gitmojiListProps)

    expect(container).toMatchSnapshot()
  })
})
